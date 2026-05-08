export function getSessionValue(key) {
  try {
    return sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

export function setSessionValue(key, value) {
  try {
    sessionStorage.setItem(key, value);
  } catch {
    // file:// previews can deny storage; site must still render.
  }
}
