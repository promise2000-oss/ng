import LegalLayout from "@/components/legal/LegalLayout";
import { cookieContent } from "@/lib/legal-content";

export default function CookiePolicyPage() {
  return <LegalLayout content={cookieContent} />;
}