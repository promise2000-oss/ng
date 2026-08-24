import { notFound } from "next/navigation";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

const validIds = ["cloud", "consulting", "academy", "gadgets", "graphics", "web", "networking", "digitization", "drone", "photo", "pos", "data-protection"];

export function generateStaticParams() {
  return validIds.map((id) => ({ id }));
}

export default async function ServiceSubPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!validIds.includes(id)) notFound();
  return <ServiceDetailPage serviceId={id} />;
}
