"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="flex flex-1 flex-col items-start justify-center gap-4 py-20">
      <h1 className="text-3xl font-semibold text-text">Something went wrong</h1>
      <p className="max-w-xl text-text-muted">
        An unexpected error occurred. You can try again, or return later.
      </p>
      <Button type="button" onClick={reset}>
        Try again
      </Button>
    </Container>
  );
}
