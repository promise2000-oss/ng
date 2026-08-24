"use client";

import { FaMoneyCheckAlt, FaWhatsapp } from "react-icons/fa";

export default function PaymentDetails() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <FaMoneyCheckAlt className="text-accent" size={18} />
        Payment Details
      </h2>
      <div className="space-y-4">
        <div className="bg-surface border border-gray-100 rounded-xl p-4">
          <p className="text-xs text-text-primary/70 mb-1">Account Name</p>
          <p className="text-sm font-semibold text-text-primary">NICEGENE TECHNOLOGY SOLUTIONS LTD</p>
        </div>
        <div className="bg-surface border border-gray-100 rounded-xl p-4">
          <p className="text-xs text-text-primary/70 mb-1">Account Number</p>
          <p className="text-lg font-bold text-accent tracking-wider">1309125177</p>
        </div>
        <div className="bg-surface border border-gray-100 rounded-xl p-4">
          <p className="text-xs text-text-primary/70 mb-1">Bank Name</p>
          <p className="text-sm font-semibold text-text-primary">Providus Bank</p>
        </div>
      </div>
      <div className="mt-6 bg-secondary/5 border border-secondary/10 rounded-xl p-4">
        <p className="text-xs text-text-primary leading-relaxed">
          Kindly make your payment and attach the proof below via WhatsApp.
          <strong className="text-text-primary"> Rolling Cohorts:</strong> New batches start
          immediately after current ones conclude.
        </p>
      </div>
      <a href="https://wa.me/2348060704412" target="_blank" rel="noopener noreferrer"
        className="mt-5 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-green-500/10 text-green-400 font-semibold text-sm hover:bg-green-500 hover:text-white transition-all border border-green-500/20">
        <FaWhatsapp size={14} /> Send Payment Proof
      </a>
    </div>
  );
}
