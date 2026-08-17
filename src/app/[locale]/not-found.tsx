import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/constants/routes";

export default function NotFound() {
  const t = useTranslations("common");

  return (
    <Container className="flex flex-1 flex-col items-start justify-center gap-4 py-20">
      <h1 className="text-3xl font-semibold text-text">{t("notFoundTitle")}</h1>
      <p className="max-w-xl text-text-muted">{t("notFoundDescription")}</p>
      <Button href={routes.home}>{t("backToHome")}</Button>
      <p className="sr-only">
        <Link href={routes.contact}>Contact</Link>
      </p>
    </Container>
  );
}
