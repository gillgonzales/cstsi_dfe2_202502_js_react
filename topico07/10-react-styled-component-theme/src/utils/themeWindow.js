const getTheme = () => {
  console.log({theme:window.matchMedia("(prefers-color-scheme: light)").matches})
  return window.matchMedia("(prefers-color-scheme: light)").matches;
};

const detectThemeChanges = (callback) => {
  window
    .matchMedia("(prefers-color-scheme: light)")
    .addEventListener("change", ({ matches }) => callback(matches));
};

export {getTheme, detectThemeChanges}
