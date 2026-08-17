"use client";

import { useEffect } from "react";

type RootErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

/** Root error boundary for paths outside the locale layout tree. */
export default function RootError({ error, reset }: RootErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-svh flex-col items-start justify-center gap-4 p-8 font-sans">
      <h1 className="text-2xl font-semibold">Something went wrong</h1>
      <p className="max-w-xl text-neutral-600">
        An unexpected error occurred. Please try again.
      </p>
      <button
        type="button"
        onClick={reset}
        className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white"
      >
        Try again
      </button>
    </div>
  );
}
