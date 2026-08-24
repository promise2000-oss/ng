import VerifyResult from "@/components/verify/VerifyResult";

export default async function VerifyResultPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <VerifyResult certId={id} />;
}