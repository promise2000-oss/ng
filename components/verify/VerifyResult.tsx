"use client";

import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";
import { motion } from "motion/react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaArrowLeft,
  FaSearch,
  FaAward,
  FaGraduationCap,
  FaShieldAlt,
} from "react-icons/fa";
import CertificateSeal from "@/components/verify/CertificateSeal";
import { useVerifyCertificate } from "@/lib/hooks/useCertificates";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function VerifyResult({
  certId,
}: {
  certId: string;
}) {
  const decodedId = decodeURIComponent(certId);
  const { data: certificate, isLoading } = useVerifyCertificate(decodedId);

  const isRevoked = certificate?.status === "revoked";
  const isValid = !!certificate && !isRevoked;
  const verifyUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `https://nicegeneco.com.ng/verify/${certId}`;

  return (
    <main className="w-full bg-background text-text-primary min-h-screen px-6 md:px-16 py-24">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/verify"
          className="inline-flex items-center gap-2 text-text-secondary text-sm hover:text-accent transition-colors mb-8"
        >
          <FaArrowLeft size={12} /> Back to Verification
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-xl shadow-primary/5"
        >
          {/* Status banner */}
          {isLoading ? (
            <div className="px-8 py-10 text-center bg-gray-100 animate-pulse">
              <div className="w-14 h-14 bg-gray-200 rounded-full mx-auto mb-4" />
              <div className="h-6 bg-gray-200 rounded w-32 mx-auto" />
            </div>
          ) : (
            <div
              className={`px-8 py-10 text-center ${
                isValid
                  ? isRevoked
                    ? "bg-error"
                    : "bg-success"
                  : "bg-error"
              }`}
            >
              {isValid && !isRevoked ? (
                <FaCheckCircle size={56} className="text-white mx-auto mb-4" />
              ) : (
                <FaTimesCircle size={56} className="text-white mx-auto mb-4" />
              )}
              <h1 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide">
                {isValid && !isRevoked ? "Valid" : "Invalid"}
              </h1>
              <p className="text-white/80 text-sm mt-2 font-mono">{decodedId}</p>
            </div>
          )}

          <div className="p-8">
            {isLoading ? (
              <div className="space-y-4 animate-pulse">
                <div className="h-20 bg-gray-100 rounded-2xl" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 bg-gray-100 rounded-2xl" />
                  <div className="h-20 bg-gray-100 rounded-2xl" />
                </div>
              </div>
            ) : isValid && !isRevoked && certificate ? (
              <div className="space-y-5">
                <div className="flex items-center gap-4 bg-surface border border-gray-100 rounded-2xl p-5">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <FaGraduationCap size={24} />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-text-secondary font-semibold">
                      Certified Student
                    </p>
                    <p className="font-bold text-text-primary text-lg">
                      {certificate.studentName}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-surface border border-gray-100 rounded-2xl p-5">
                    <p className="text-[11px] uppercase tracking-wider text-text-secondary font-semibold">
                      Course Completed
                    </p>
                    <p className="font-semibold text-text-primary mt-1">
                      {certificate.course}
                    </p>
                  </div>
                  <div className="bg-surface border border-gray-100 rounded-2xl p-5">
                    <p className="text-[11px] uppercase tracking-wider text-text-secondary font-semibold">
                      Date of Completion
                    </p>
                    <p className="font-semibold text-text-primary mt-1">
                      {formatDate(certificate.completionDate)}
                    </p>
                  </div>
                </div>

                {certificate.grade && certificate.gradeConsented && (
                  <div className="bg-success/5 border border-success/20 rounded-2xl p-5 flex items-center gap-3">
                    <FaAward size={20} className="text-success shrink-0" />
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-success font-semibold">
                        Grade Achieved
                      </p>
                      <p className="font-bold text-text-primary">{certificate.grade}</p>
                    </div>
                  </div>
                )}

                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-5 flex items-start gap-3">
                  <FaShieldAlt size={18} className="text-primary shrink-0 mt-0.5" />
                  <p className="text-[13px] text-text-secondary leading-relaxed">
                    This certificate was issued by the NICEGENE Digital Academy, NICEGENE
                    Technology Solutions Limited, and is recorded in the permanent verification
                    registry. Its authenticity has been confirmed.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-5 justify-center pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <div className="bg-white border border-gray-200 rounded-xl p-3 inline-block">
                      <QRCodeSVG value={verifyUrl} size={104} />
                    </div>
                    <p className="text-[11px] text-text-secondary mt-2">Scan to re-verify</p>
                  </div>
                  <div className="text-center">
                    <CertificateSeal className="w-24 h-24" />
                  </div>
                </div>
              </div>
            ) : isRevoked ? (
              <div className="text-center py-4">
                <FaTimesCircle size={40} className="text-error mx-auto mb-4" />
                <p className="text-text-secondary text-sm leading-relaxed max-w-md mx-auto">
                  This certificate has been revoked by the NICEGENE Digital Academy and is no
                  longer valid. For questions, please contact us at info@nicegeneco.com.ng.
                </p>
              </div>
            ) : (
              <div className="text-center py-4">
                <FaSearch size={40} className="text-error mx-auto mb-4" />
                <p className="text-text-secondary text-sm leading-relaxed max-w-md mx-auto">
                  No certificate matching this ID was found in the Nicegene Digital Academy
                  records. Please confirm that you entered the Certificate ID exactly as printed
                  on the certificate.
                </p>
              </div>
            )}

            <div className="mt-6 text-center">
              <Link
                href="/verify"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold text-sm hover:bg-primary transition-all"
              >
                Verify Another Certificate
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
