"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  FaUserCircle,
  FaSignOutAlt,
  FaFileInvoiceDollar,
  FaArrowLeft,
  FaCheckCircle,
  FaExclamationCircle,
  FaTag,
  FaClock,
} from "react-icons/fa";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import GridOverlay from "@/components/animations/GridOverlay";
import { useReferrals } from "@/lib/hooks/useReferrals";
import { REFERRAL_FLOW } from "@/lib/types";
import type { Referral, ReferralStatus } from "@/lib/types";
import { useAuth } from "@/lib/hooks/useAuth";
import type { AuthUser } from "@/lib/types";

const statusStyle: Record<ReferralStatus, string> = {
  Submitted: "bg-blue-50 text-accent border-blue-100",
  Contacted: "bg-amber-50 text-amber-600 border-amber-100",
  "Proposal Sent": "bg-purple-50 text-purple-700 border-purple-100",
  Converted: "bg-green-50 text-green-700 border-green-100",
  "Commission Due": "bg-primary/5 text-primary border-primary/20",
};

export default function ReferralsDashboard() {
  const { profile, isAuthenticated, isLoading: authLoading, logout } = useAuth();
  const session = profile.data;

  if (authLoading) return null;

  return (
    <main className="w-full bg-background text-text-primary min-h-screen">
      {isAuthenticated && session ? (
        <DashboardView session={session} onLogout={logout} />
      ) : (
        <LoginView />
      )}
    </main>
  );
}

function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { login, isLoading: authLoading } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }
    login.mutate(
      { email: email.trim(), password },
      {
        onSuccess: () => {},
        onError: () => setError("Invalid credentials. Please check your email and password."),
      }
    );
  };

  return (
    <section className="relative bg-primary min-h-screen overflow-hidden">
      <FloatingOrbs
        orbs={[
          { size: 500, color: "bg-secondary", x: 60, y: 30, duration: 22, delay: 0, blur: 140 },
          { size: 400, color: "bg-accent", x: 25, y: 65, duration: 20, delay: 3, blur: 120 },
        ]}
      />
      <GridOverlay opacity={0.06} size={60} color="rgba(255,255,255,0.08)" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <Link
            href="/referrals"
            className="inline-flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors mb-8"
          >
            <FaArrowLeft size={12} /> Back to Referral Programme
          </Link>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-5">
              <FaUserCircle size={28} />
            </div>
            <h1 className="text-2xl font-bold text-text-primary">Referrer Dashboard</h1>
            <p className="text-text-secondary text-sm mt-1 mb-6">
              Log in to track your referrals and commissions.
            </p>

            {error && (
              <div className="flex items-start gap-2 bg-error/10 border border-error/20 text-error text-[13px] rounded-xl px-4 py-3 mb-4">
                <FaExclamationCircle size={15} className="mt-0.5 shrink-0" />
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="ref-login-email" className="block text-xs font-semibold text-text-primary mb-1.5">
                  Email Address
                </label>
                <input
                  id="ref-login-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-gray-200 text-text-primary text-sm placeholder:text-text-secondary/60 focus:outline-none focus:border-accent transition-all"
                />
              </div>
              <div>
                <label htmlFor="ref-login-password" className="block text-xs font-semibold text-text-primary mb-1.5">
                  Password
                </label>
                <input
                  id="ref-login-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-gray-200 text-text-primary text-sm placeholder:text-text-secondary/60 focus:outline-none focus:border-accent transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={authLoading}
                className="w-full px-6 py-3.5 rounded-full bg-accent text-white font-semibold text-sm hover:bg-primary transition-all disabled:opacity-50"
              >
                {authLoading ? "Logging in..." : "Log In"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DashboardView({
  session,
  onLogout,
}: {
  session: AuthUser;
  onLogout: () => void;
}) {
  const { data: allReferrals = [] } = useReferrals();

  const myReferrals = useMemo(() => {
    const filtered = allReferrals.filter(
      (r) => r.referrerContact.toLowerCase() === session.email.toLowerCase()
    );
    return filtered.length > 0 ? filtered : allReferrals;
  }, [allReferrals, session.email]);

  const commissionEarned = myReferrals
    .filter((r) => r.status === "Commission Due" || r.status === "Converted")
    .reduce((sum, r) => sum + r.commission, 0);
  const converted = myReferrals.filter((r) => r.status === "Converted" || r.status === "Commission Due").length;

  return (
    <section className="relative bg-surface min-h-screen overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pt-14 pb-24">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
          <div>
            <p className="text-secondary text-sm uppercase tracking-[0.2em] font-semibold mb-1">
              Referrer Dashboard
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-text-primary">
              Welcome, {session.name.split(" ")[0]}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/referrals"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-text-primary text-[13px] font-semibold hover:border-accent hover:text-accent transition-all"
            >
              <FaArrowLeft size={11} /> Referral Programme
            </Link>
            <button
              onClick={onLogout}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-text-primary text-[13px] font-semibold hover:border-error hover:text-error transition-all"
            >
              <FaSignOutAlt size={13} /> Log Out
            </button>
          </div>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-[12px] uppercase tracking-wider text-text-secondary font-semibold">
              My Referrals
            </p>
            <p className="text-3xl font-bold text-text-primary mt-2">{myReferrals.length}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-[12px] uppercase tracking-wider text-text-secondary font-semibold">
              Converted
            </p>
            <p className="text-3xl font-bold text-success mt-2">{converted}</p>
          </div>
          <div className="bg-primary border border-primary rounded-2xl p-6">
            <p className="text-[12px] uppercase tracking-wider text-white/60 font-semibold flex items-center gap-1.5">
              <FaFileInvoiceDollar size={12} /> Commission Earned
            </p>
            <p className="text-3xl font-bold text-white mt-2">
              ₦{commissionEarned.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Referral list */}
        <div className="space-y-5">
          <h2 className="text-lg font-bold text-text-primary">My Referrals</h2>
          {myReferrals.map((referral) => {
            const currentIndex = REFERRAL_FLOW.indexOf(referral.status);
            return (
              <div
                key={referral._id}
                className="bg-white border border-gray-200 rounded-2xl p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-text-primary">{referral.refereeCompany || referral.refereeName}</h3>
                      <span
                        className={`text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border ${statusStyle[referral.status]}`}
                      >
                        {referral.status}
                      </span>
                    </div>
                    <p className="text-[13px] text-text-secondary mt-1">
                      {referral.service} · Referred on{" "}
                      {new Date(referral.dateSubmitted).toLocaleDateString("en-NG", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 text-[13px] font-mono font-bold text-accent bg-accent/5 border border-accent/20 px-3 py-1.5 rounded-full">
                      <FaTag size={11} /> {referral.trackingId}
                    </span>
                    {referral.commission > 0 && (
                      <span className="text-[13px] font-bold text-success bg-success/5 border border-success/20 px-3 py-1.5 rounded-full">
                        +₦{referral.commission.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>

                {/* Status flow */}
                <div className="flex items-center gap-1 md:gap-2">
                  {REFERRAL_FLOW.map((status, i) => {
                    const reached = i <= currentIndex;
                    const isCurrent = i === currentIndex;
                    return (
                      <div key={status} className="flex-1">
                        <div
                          className={`h-1.5 rounded-full ${
                            isCurrent
                              ? "bg-accent"
                              : reached
                                ? "bg-accent/50"
                                : "bg-gray-200"
                          }`}
                        />
                        <p className="hidden md:block text-[10px] mt-1.5 text-text-secondary text-center">
                          {status}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Status history */}
                {referral.statusHistory && referral.statusHistory.length > 0 && (
                  <details className="mt-5 group">
                    <summary className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-accent cursor-pointer hover:text-primary transition-colors list-none">
                      <FaClock size={11} /> Status history &amp; notifications
                    </summary>
                    <div className="mt-3 space-y-2">
                      {referral.statusHistory.map((h, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 bg-surface border border-gray-100 rounded-xl px-4 py-3"
                        >
                          <FaCheckCircle size={14} className="text-success mt-0.5 shrink-0" />
                          <div>
                            <p className="text-[13px] font-semibold text-text-primary">
                              {h.status}
                              <span className="text-text-secondary font-normal">
                                {" "}
                                · {new Date(h.date).toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric" })}
                              </span>
                            </p>
                            <p className="text-[12px] text-text-secondary mt-0.5">{h.note}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </details>
                )}
              </div>
            );
          })}

          {myReferrals.length === 0 && (
            <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center">
              <p className="text-text-secondary text-sm">
                You have not submitted any referrals yet.{" "}
                <Link href="/referrals" className="text-accent font-semibold hover:text-primary">
                  Submit your first referral
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
