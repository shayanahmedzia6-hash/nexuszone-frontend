import { type Service } from "@/types/service";

/**
 * Domain API stub — replace with real backend calls later.
 * Currently returns empty collections from the typed data layer.
 */
export async function fetchServices(): Promise<Service[]> {
  const { services } = await import("@/data/services");
  return services;
}

export async function fetchServiceBySlug(
  slug: string,
): Promise<Service | undefined> {
  const services = await fetchServices();
  return services.find((service) => service.slug === slug);
}
