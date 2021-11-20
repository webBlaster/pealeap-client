let localStorage = window.localStorage;

export function storeAuthInfo(authInfo) {
  localStorage.setItem("authInfo", JSON.stringify(authInfo));
}

export function getAuthInfo() {
  let authInfo = localStorage.getItem("authInfo");
  if (authInfo) {
    try {
      authInfo = JSON.parse(authInfo);
    } catch (e) {
      authInfo = {};
    }
  }

  return authInfo;
}

export function clearAuthInfo() {
  localStorage.removeItem("authInfo");
}

export const copyText = (text) => {
  const el = document.createElement("textarea");
  el.value = text;
  el.setAttribute("readonly", "");
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};
