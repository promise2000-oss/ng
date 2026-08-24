import LegalLayout from "@/components/legal/LegalLayout";
import { termsContent } from "@/lib/legal-content";

export default function TermsPage() {
  return <LegalLayout content={termsContent} />;
}