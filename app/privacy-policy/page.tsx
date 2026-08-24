import LegalLayout from "@/components/legal/LegalLayout";
import { privacyContent } from "@/lib/legal-content";

export default function PrivacyPolicyPage() {
  return <LegalLayout content={privacyContent} />;
}