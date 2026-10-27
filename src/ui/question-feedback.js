export function mountQuestionFeedback({ host, shell, feedback, signal, locale = "ar", onHidden }) {
  const ar = locale === "ar";
  const flag = document.createElement("button");
  flag.type = "button";
  flag.className = "question-report-button";
  flag.dataset.questionReport = "";
  flag.setAttribute("aria-label",ar ? "الإبلاغ عن هذا السؤال" : "Report this question");
  flag.title = flag.getAttribute("aria-label");
  flag.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 21V4m0 1c5-5 9 5 14 0v10c-5 5-9-5-14 0"/></svg>';
  const source = host.querySelector(".lesson-question-source");
  if (source) host.querySelectorAll(".lesson-flashcard-copy").forEach(copy => {
    if (!copy.querySelector(".lesson-question-source")) copy.prepend(source.cloneNode(true));
  });
  const sourceRows = [...host.querySelectorAll(".lesson-question-source")].map(tag => {
    const row = document.createElement("div");
    row.className = "lesson-question-meta";
    tag.before(row);
    row.append(tag);
    return row;
  });
  if (!sourceRows.length) {
    const row = document.createElement("div");
    row.className = "lesson-question-meta";
    (host.querySelector(".level-lesson-copy") || host).prepend(row);
    sourceRows.push(row);
  }
  const placeFlag = () => {
    const row = sourceRows.find(item => !item.closest('[aria-hidden="true"]')) || sourceRows[0];
    if (flag.parentElement !== row) row.append(flag);
  };
  placeFlag();
  let dialog = null;
  const close = () => { dialog?.close(); };
  flag.addEventListener("click", () => {
    if (dialog?.open) return;
    dialog = document.createElement("dialog");
    dialog.className = "question-report-dialog";
    dialog.dir = ar ? "rtl" : "ltr";
    dialog.setAttribute("aria-labelledby","question-report-title");
    const reasons = ar
      ? [["question","مشكلة في السؤال"],["answer","مشكلة في الإجابة"],["display","مشكلة في العرض"],["other","سبب آخر"]]
      : [["question","Question issue"],["answer","Answer issue"],["display","Display issue"],["other","Other"]];
    dialog.innerHTML = `<form data-question-report-form><div class="question-report-heading"><h2 id="question-report-title">${ar ? "الإبلاغ عن سؤال" : "Report a question"}</h2><button type="button" data-report-close aria-label="${ar ? "إغلاق" : "Close"}">×</button></div>
      <p>${ar ? "شكرًا لمساعدتنا في تحسين الأسئلة. اختر المشكلة." : "Help us improve this question. Choose the issue."}</p>
      <fieldset><legend>${ar ? "نوع المشكلة" : "Issue"}</legend>${reasons.map(([value,label],index) => `<label><input type="radio" name="reason" value="${value}"${index === 0 ? " checked" : ""}>${label}</label>`).join("")}</fieldset>
      <label class="question-report-details">${ar ? "تفاصيل إضافية (اختياري)" : "Details (optional)"}<textarea name="details" maxlength="1000" rows="3"></textarea></label>
      <p class="question-feedback-status" data-report-status role="status" aria-live="polite"></p>
      <button class="system-action system-action--primary" type="submit">${ar ? "إرسال البلاغ" : "Send report"}</button>
      ${feedback?.hide ? `<button class="question-hide-action" type="button" data-question-hide>${ar ? "إخفاء هذا السؤال عني" : "Hide this question for me"}</button>` : ""}</form>`;
    document.body.append(dialog);
    const activeDialog = dialog;
    activeDialog.addEventListener("close", () => {
      activeDialog.remove();
      if (dialog === activeDialog) dialog = null;
      if (!signal.aborted && flag.isConnected) flag.focus({ preventScroll:true });
    }, { once:true });
    activeDialog.querySelector("[data-report-close]").addEventListener("click",close,{ signal });
    activeDialog.querySelector("[data-question-hide]")?.addEventListener("click", () => {
      activeDialog.setAttribute("aria-describedby","question-hide-warning");
      activeDialog.innerHTML = `<form data-question-hide-form><div class="question-report-heading"><h2 id="question-report-title">${ar ? "إخفاء هذا السؤال؟" : "Hide this question?"}</h2><button type="button" data-report-close aria-label="${ar ? "إغلاق" : "Close"}">×</button></div>
        <p id="question-hide-warning">${ar ? "لن يظهر هذا السؤال مجددًا في دروسك أو مراجعاتك. يُخفى من حسابك فقط، ويبقى متاحًا للطلاب الآخرين. إخفاؤه لا يُحتسب إجابة ولا يمنحك نقاطًا." : "This question will no longer appear in your lessons or reviews. It will be hidden only for your account and remain available to other students. Hiding it does not count as an answer or earn points."}</p>
        <p class="question-feedback-status" data-hide-status role="status" aria-live="polite"></p>
        <div class="question-hide-actions"><button type="button" class="system-action" data-hide-cancel>${ar ? "إلغاء" : "Cancel"}</button><button type="submit" class="system-action system-action--primary" data-hide-confirm>${ar ? "تأكيد الإخفاء" : "Confirm hiding"}</button></div></form>`;
      activeDialog.querySelector("[data-report-close]").addEventListener("click",close,{ signal });
      activeDialog.querySelector("[data-hide-cancel]").addEventListener("click",close,{ signal });
      activeDialog.querySelector("[data-hide-cancel]").focus();
      activeDialog.querySelector("form").addEventListener("submit", async event => {
        event.preventDefault();
        const submit = activeDialog.querySelector("[data-hide-confirm]");
        if (submit.disabled) return;
        const status = activeDialog.querySelector("[data-hide-status]");
        submit.disabled = true;
        status.textContent = ar ? "جارٍ إخفاء السؤال…" : "Hiding question…";
        let result;
        try { result = await feedback.hide({ signal }); } catch { /* Show the retry message below. */ }
        if (signal.aborted) return;
        if (result?.status === "saved") {
          activeDialog.close();
          onHidden?.();
        } else if (activeDialog.open) {
          submit.disabled = false;
          status.textContent = ar ? "تعذّر إخفاء السؤال. حاول مجددًا." : "Could not hide this question. Try again.";
        }
      }, { signal });
    }, { signal });
    activeDialog.querySelector("form").addEventListener("submit",async event => {
      event.preventDefault();
      const form = event.currentTarget;
      const submit = form.querySelector('[type="submit"]');
      const status = form.querySelector("[data-report-status]");
      if (submit.disabled) return;
      submit.disabled = true;
      const hide = form.querySelector("[data-question-hide]");
      if (hide) hide.disabled = true;
      status.textContent = ar ? "جارٍ إرسال البلاغ…" : "Sending…";
      const data = new FormData(form);
      const result = await feedback?.report(String(data.get("reason")),String(data.get("details") || ""),{ signal });
      if (signal.aborted || !activeDialog.open) return;
      submit.disabled = false;
      if (hide) hide.disabled = false;
      if (result?.status !== "saved") {
        status.textContent = ar ? "تعذّر إرسال البلاغ. حاول مجددًا." : "Could not send the report. Try again.";
        return;
      }
      form.innerHTML = `<h2 id="question-report-title">${ar ? "شكرًا لك!" : "Thank you!"}</h2><p role="status">${ar ? "تم إرسال بلاغك للمراجعة." : "Your report was saved for review."}</p><button type="button" class="system-action system-action--primary">${ar ? "تم" : "Done"}</button>`;
      form.querySelector("button").addEventListener("click",close,{ signal });
      form.querySelector("button").focus();
    }, { signal });
    activeDialog.showModal();
  }, { signal });

  const restored = new WeakSet();
  const restoreRating = () => {
    const panel = host.querySelector(".level-question-rating-panel");
    if (!panel) return;
    if (!restored.has(panel)) {
      restored.add(panel);
      const status = document.createElement("span");
      status.className = "question-rating-save-status";
      status.setAttribute("role","status");
      status.setAttribute("aria-live","polite");
      panel.append(status);
    }
    const rating = feedback?.getRating();
    const selected = [...panel.querySelectorAll("[data-question-rating]")].find(input => input.value === rating);
    if (selected) {
      selected.checked = true;
      selected.closest(".level-question-ratings").dataset.selectedRating = rating;
      panel.closest(".level-layout-actions").dataset.selectedQuestionRating = rating;
    }
  };
  const observer = new MutationObserver(() => { placeFlag(); restoreRating(); });
  observer.observe(host,{ childList:true,subtree:true,attributes:true,attributeFilter:["aria-hidden"] });
  restoreRating();
  const unsubscribe = feedback?.subscribe?.(restoreRating);
  let revision = 0;
  host.addEventListener("change",async event => {
    if (!event.target.matches("[data-question-rating]")) return;
    const current = ++revision;
    const panel = event.target.closest(".level-question-rating-panel");
    const status = panel.querySelector(".question-rating-save-status");
    if (status) status.textContent = ar ? "جارٍ الحفظ…" : "Saving…";
    const result = await feedback?.saveRating(event.target.value,{ signal });
    if (signal.aborted || current !== revision || !status?.isConnected) return;
    status.textContent = result?.status === "saved"
      ? ""
      : (ar ? "تعذّر حفظ التقييم. اختره مجددًا للمحاولة." : "Could not save. Try choosing again.");
  }, { signal });
  signal.addEventListener("abort", () => { unsubscribe?.(); observer.disconnect(); close(); flag.remove(); },{ once:true });
}
