export function darkMode(theme, toggleTheme) {
  return {
    type: '@theme/TOGGLE_SWITCHER',
    payload: { theme, toggleTheme },
  };
}
