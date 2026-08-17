import Link from "next/link";

/** Fallback for paths outside any locale segment — middleware normally redirects before this renders. */
export default function RootNotFound() {
  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif", padding: "2rem" }}>
        <h1>Page not found</h1>
        <p>
          <Link href="/">Back to home</Link>
        </p>
      </body>
    </html>
  );
}
