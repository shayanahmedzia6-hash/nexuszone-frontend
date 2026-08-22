/**
 * @deprecated Theme flash is prevented via cookie + `data-theme` on `<html>`
 * in the root layout (React 19 disallows inline `<script>` in components).
 * Kept only as a reference for the previous localStorage bootstrap logic.
 */
export const themeInitScript = `(function(){try{var k="nexus-zone-theme";var raw=localStorage.getItem(k);var theme=null;if(raw){try{var parsed=JSON.parse(raw);theme=parsed&&parsed.state&&parsed.state.theme;}catch(e){theme=raw;}}if(theme!=="light"&&theme!=="dark"){theme=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}document.documentElement.setAttribute("data-theme",theme);}catch(e){document.documentElement.setAttribute("data-theme","light");}})();`;
