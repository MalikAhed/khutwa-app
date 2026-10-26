export function mountComingSoonToast(t){let o;function e(){clearTimeout(o),t.hidden=!0}return{show(){clearTimeout(o),t.textContent="قريبًا",t.hidden=!1,o=setTimeout(e,2500)}}}
