// @ts-check
import { getCourseSubject } from "../data/course.js";
import { getSubjectRoadmap, getSubjectRoadmapLesson } from "../data/subject-roadmaps.js";
import { resolveQuestionLocation } from "../domain/question-rewards.js";

/** @typedef {{page:string, subject:string|null, lesson:string|null, part:string|null, flow:string|null, question?:string, rating?:string}} Route */
/** @typedef {{page?:string, subject?:string|null, lesson?:string|null, part?:string|null, flow?:string|null, question?:string|null, rating?:string|null}} RouteTarget */

const APP_PAGES = new Set(["learn", "rated-questions", "more"]);
export const VISITOR_FLOWS = new Set(["entry", "register", "sign-in"]);

export function isUnlockedPage(page) {
  return page === "learn" || page === "rated-questions";
}

function lessonSubject(subject, lesson) {
  return subject === "mathematics" && getSubjectRoadmapLesson("mathematics-2", lesson)
    ? "mathematics-2" : subject;
}

/** @param {string|null} [question] */
function lessonDestination(subject, lesson, part, question = null) {
  const target = getSubjectRoadmapLesson(subject, lesson);
  // Formerly unpublished topic links now resolve to the video covering that topic.
  let selected = target?.parts.find(candidate => candidate.id === part || ("aliases" in candidate && candidate.aliases.includes(part)));
  const location = question && selected ? resolveQuestionLocation({ subjectId:subject, lessonId:target.id, partId:selected.id, stepId:question }) : null;
  if (location) { question = location.stepId; selected = target.parts.find(part => part.id === location.partId); }
  if (selected && target && "hidden" in target && target.hidden) {
    if (subject === "islamic-education" && target.id.startsWith("islamic-"))
      return { lesson:target.id, part:selected.id };
    for (const unit of getSubjectRoadmap(subject)?.units || []) {
      const first = unit.lessons.find(lesson => !("hidden" in lesson && lesson.hidden));
      if (first) return { lesson:first.id, part:first.parts[0]?.id || null };
    }
    return { lesson:null, part:null };
  }
  return selected && target
    ? { lesson:target.id, part:selected.id,
      ...(location ? { question:location.stepId } : {}),
    } : { lesson:null, part:null };
}

/** @param {string} [search] @returns {Route} */
export function readRoute(search = "") {
  const params = new URLSearchParams(search);
  const requestedFlow = params.get("flow");
  const flow = VISITOR_FLOWS.has(requestedFlow || "") ? requestedFlow : null;
  if (flow) return { page:"learn", subject:null, lesson:null, part:null, flow };
  if (!params.has("page") && !params.has("subject") && !params.has("view")) {
    return { page:"learn", subject:null, lesson:null, part:null, flow:"entry" };
  }
  const requestedPage = params.get("page");
  if (requestedPage && !APP_PAGES.has(requestedPage))
    return { page:"learn", subject:null, lesson:null, part:null, flow:null };
  const page = requestedPage || "learn";
  if (page === "more") return { page, subject:null, lesson:null, part:null, flow:null };

  const requestedSubject = getCourseSubject(params.get("subject"));
  const subject = lessonSubject(requestedSubject?.status === "available" ? requestedSubject.id : null, params.get("lesson"));
  const rating = page === "rated-questions" && ["easy","medium","hard"].includes(params.get("rating") || "") ? params.get("rating") || "easy" : "easy";
  return { page, ...(page === "rated-questions" && subject ? { rating } : {}), subject, ...lessonDestination(subject, params.get("lesson"), params.get("part"), params.get("question")), flow:null };
}

/** @param {string} currentHref @param {RouteTarget} [route] */
export function createRouteUrl(currentHref, route = {}) {
  const { page = "learn", subject = null, lesson = null, part = null, flow = null, question = null, rating = null } = route;
  const url = new URL(currentHref);
  url.searchParams.delete("page");
  url.searchParams.delete("day");
  url.searchParams.delete("subject");
  url.searchParams.delete("lesson");
  url.searchParams.delete("part");
  url.searchParams.delete("view");
  url.searchParams.delete("flow");
  url.searchParams.delete("more-tab");
  for (const key of ["prototype", "week", "review", "batch", "question", "filter", "rating"]) url.searchParams.delete(key);

  if (VISITOR_FLOWS.has(flow || "")) {
    if (flow !== "entry") url.searchParams.set("flow", flow || "");
  } else if (page === "more" || page === "rated-questions" && !subject) {
    url.searchParams.set("page", page);
  } else if (getCourseSubject(subject)?.status === "available") {
    if (page === "rated-questions") {
      url.searchParams.set("page",page);
      url.searchParams.set("rating",["easy","medium","hard"].includes(rating || "") ? rating || "easy" : "easy");
    }
    const destinationSubject = lessonSubject(subject, lesson);
    url.searchParams.set("subject", destinationSubject || "");
    const destination = lessonDestination(destinationSubject, lesson, part, question);
    if (destination.lesson && destination.part) {
      url.searchParams.set("lesson", destination.lesson);
      url.searchParams.set("part", destination.part);
      if (destination.question) url.searchParams.set("question", destination.question);
    }
  } else if (route.page === "learn") {
    url.searchParams.set("page", "learn");
  }
  return url;
}
