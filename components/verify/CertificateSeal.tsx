"use client";

export default function CertificateSeal({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      aria-label="NICEGENE Technologies official seal"
      role="img"
    >
      <circle cx="60" cy="60" r="56" fill="none" stroke="#1B3A6B" strokeWidth="3" />
      <circle cx="60" cy="60" r="49" fill="none" stroke="#2E5FA3" strokeWidth="1.5" />
      <path
        id="seal-top"
        d="M 60,15 A 45,45 0 0 1 105,60"
        fill="none"
        stroke="none"
      />
      <text fill="#1B3A6B" fontSize="9.5" fontWeight="700" letterSpacing="1.5">
        <textPath href="#seal-top" startOffset="50%" textAnchor="middle">
          NICEGENE TECHNOLOGIES
        </textPath>
      </text>
      <path
        id="seal-bottom"
        d="M 60,105 A 45,45 0 0 1 15,60"
        fill="none"
        stroke="none"
      />
      <text fill="#1B3A6B" fontSize="8" fontWeight="600" letterSpacing="1">
        <textPath href="#seal-bottom" startOffset="50%" textAnchor="middle">
          VERIFIED · OFFICIAL SEAL
        </textPath>
      </text>
      <circle cx="60" cy="60" r="26" fill="#F5F7FA" stroke="#2E5FA3" strokeWidth="1" />
      <text x="60" y="56" textAnchor="middle" fill="#1B3A6B" fontSize="16" fontWeight="800">
        N
      </text>
      <text x="60" y="71" textAnchor="middle" fill="#2E5FA3" fontSize="7" fontWeight="700">
        NIGERIA
      </text>
    </svg>
  );
}