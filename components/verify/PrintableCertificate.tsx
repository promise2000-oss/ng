"use client";

import { useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import CertificateSeal from "@/components/verify/CertificateSeal";
import { formatDate, type Certificate } from "@/lib/seed-data";

export default function PrintableCertificate({
  certificate,
  onClose,
}: {
  certificate: Certificate;
  onClose: () => void;
}) {
  const verifyUrl = `https://nicegeneco.com.ng/verify/${certificate.id}`;

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `Certificate ${certificate.id} — NICEGENE Digital Academy`;
    return () => {
      document.title = previousTitle;
    };
  }, [certificate.id]);

  return (
    <div className="fixed inset-0 z-[80] bg-primary-darker/70 backdrop-blur-sm flex justify-center p-4 overflow-y-auto print:bg-white print:p-0 print:static print:overflow-visible">
      <div className="max-w-4xl w-full my-auto print:my-0">
        <div className="hidden print:block" />

        {/* Certificate sheet */}
        <div className="bg-white rounded-none md:rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="absolute inset-3 border-[6px] border-double border-primary/70 pointer-events-none rounded-none md:rounded-2xl" />
          <div className="absolute inset-6 border border-accent/40 pointer-events-none rounded-none md:rounded-xl" />

          <div className="relative px-10 md:px-16 py-14 text-center print:py-10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <img
                src="/NICEGENE%20TECHNOLOGIES%20LOGO.png"
                alt="NICEGENE Technologies logo"
                className="h-14 w-auto object-contain"
              />
            </div>

            <p className="text-accent text-xs md:text-sm uppercase tracking-[0.35em] font-semibold">
              NICEGENE Digital Academy
            </p>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary mt-2 tracking-wide">
              Certificate of Completion
            </h1>
            <p className="text-[13px] text-text-secondary mt-2">
              This is to certify that
            </p>
            <p className="text-2xl md:text-4xl font-serif font-bold text-text-primary mt-4 italic">
              {certificate.studentName}
            </p>
            <p className="text-[13px] text-text-secondary mt-4 max-w-md mx-auto leading-relaxed">
              has successfully completed the
            </p>
            <p className="text-lg md:text-xl font-bold text-accent mt-1">
              {certificate.course}
            </p>
            <p className="text-[13px] text-text-secondary mt-4 max-w-lg mx-auto leading-relaxed">
              programme of the NICEGENE Digital Academy, delivered by NICEGENE Technology
              Solutions Limited, and has satisfied all programme requirements including
              assessments.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mt-12">
              <div className="text-left">
                <p className="text-[11px] text-text-secondary font-semibold uppercase tracking-wider">
                  Date of Completion
                </p>
                <p className="font-semibold text-text-primary">
                  {formatDate(certificate.completionDate)}
                </p>
                {certificate.grade && (
                  <p className="text-[11px] text-text-secondary font-semibold uppercase tracking-wider mt-3">
                    Grade Achieved
                  </p>
                )}
                {certificate.grade && (
                  <p className="font-semibold text-text-primary">{certificate.grade}</p>
                )}
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="bg-white border border-gray-200 rounded-lg p-2 inline-block">
                    <QRCodeSVG value={verifyUrl} size={88} />
                  </div>
                  <p className="text-[10px] text-text-secondary mt-1 max-w-[120px] leading-tight">
                    Scan to verify authenticity
                  </p>
                </div>
                <CertificateSeal className="w-24 h-24" />
              </div>
            </div>

            <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-100">
              <div className="text-left">
                <p className="font-serif italic text-lg text-text-primary">
                  Eugene O. Orji
                </p>
                <p className="text-[11px] text-text-secondary uppercase tracking-wider">
                  Chief Executive Officer
                </p>
              </div>
              <div className="text-right">
                <p className="font-mono text-[13px] font-bold text-text-primary">
                  {certificate.id}
                </p>
                <p className="text-[11px] text-text-secondary uppercase tracking-wider">
                  Certificate ID
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions (hidden when printing) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 print:hidden">
          <button
            onClick={() => window.print()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-accent text-white font-semibold text-sm hover:bg-primary transition-all"
          >
            Download PDF
          </button>
          <a
            href={`/verify/${certificate.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white border border-gray-200 text-text-primary font-semibold text-sm hover:border-accent hover:text-accent transition-all"
          >
            Verify This Certificate
          </a>
          <button
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white border border-gray-200 text-text-primary font-semibold text-sm hover:border-error hover:text-error transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}