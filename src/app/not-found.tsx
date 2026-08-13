import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/constants/routes";

export default function NotFound() {
  return (
    <Container className="flex flex-1 flex-col items-start justify-center gap-4 py-20">
      <h1 className="text-3xl font-semibold text-text">Page not found</h1>
      <p className="max-w-xl text-text-muted">
        The page you requested does not exist or may have moved.
      </p>
      <Button href={routes.home}>Back to home</Button>
      <p className="sr-only">
        <Link href={routes.contact}>Contact</Link>
      </p>
    </Container>
  );
}
