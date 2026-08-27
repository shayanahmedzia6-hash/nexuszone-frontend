import path from "node:path";

/** Content-ID used in HTML as `src="cid:nexus-zone-logo"`. */
export const EMAIL_LOGO_CID = "nexus-zone-logo";

export function emailLogoSrc(): string {
  return `cid:${EMAIL_LOGO_CID}`;
}

/** Inline logo attachment — works in Gmail even when the site URL is localhost. */
export function getEmailLogoAttachment() {
  return {
    filename: "nexus-zone-logo.png",
    path: path.join(process.cwd(), "public", "logos", "light-mode.png"),
    cid: EMAIL_LOGO_CID,
    contentType: "image/png" as const,
  };
}
