/**
 * Blocking script — runs before paint to prevent theme flash.
 * Must stay in sync with THEME_STORAGE_KEY / Zustand persist shape.
 */
export const themeInitScript = `(function(){try{var k="nexus-zone-theme";var raw=localStorage.getItem(k);var theme=null;if(raw){try{var parsed=JSON.parse(raw);theme=parsed&&parsed.state&&parsed.state.theme;}catch(e){theme=raw;}}if(theme!=="light"&&theme!=="dark"){theme=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}document.documentElement.setAttribute("data-theme",theme);}catch(e){document.documentElement.setAttribute("data-theme","light");}})();`;
