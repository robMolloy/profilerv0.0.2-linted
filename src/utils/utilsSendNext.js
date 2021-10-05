export const sendNext = (path) => {
  window.sendToOnAuthenticationChange = path;
};
export const sendNextIfCurrentlyBlank = (path) => {
  if (!window.sendToOnAuthenticationChange) { window.sendToOnAuthenticationChange = path; }
};
