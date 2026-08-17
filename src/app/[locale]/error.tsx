"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: ErrorPageProps) {
  const t = useTranslations("common");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="flex flex-1 flex-col items-start justify-center gap-4 py-20">
      <h1 className="text-3xl font-semibold text-text">{t("errorTitle")}</h1>
      <p className="max-w-xl text-text-muted">{t("errorDescription")}</p>
      <Button type="button" onClick={reset}>
        {t("tryAgain")}
      </Button>
    </Container>
  );
}
