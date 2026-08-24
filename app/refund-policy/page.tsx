import LegalLayout from "@/components/legal/LegalLayout";
import { refundContent } from "@/lib/legal-content";

export default function RefundPolicyPage() {
  return <LegalLayout content={refundContent} />;
}