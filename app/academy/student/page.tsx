"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  FaUserCircle,
  FaSignOutAlt,
  FaArrowLeft,
  FaExclamationCircle,
  FaCheckCircle,
  FaGraduationCap,
  FaBookOpen,
  FaCalendarAlt,
  FaFileInvoiceDollar,
  FaAward,
  FaBell,
  FaUserCog,
  FaFileDownload,
  FaReceipt,
  FaEdit,
  FaSave,
  FaShieldAlt,
  FaCheckDouble,
  FaExclamationTriangle,
} from "react-icons/fa";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import GridOverlay from "@/components/animations/GridOverlay";
import PrintableCertificate from "@/components/verify/PrintableCertificate";
import { useStudents } from "@/lib/hooks/useStudents";
import { useCertificates } from "@/lib/hooks/useCertificates";
import {
  seedExams,
  formatDate,
  type Student,
  type Certificate,
  type PaymentRecord,
} from "@/lib/seed-data";
import {
  verifyLogin,
  createSession,
  getSession,
  clearSession,
  demoCredentialHint,
  type AuthSession,
} from "@/lib/demo-auth";

type Tab = "dashboard" | "profile" | "payments" | "results" | "certificate" | "notifications";

export default function StudentPortal() {
  const [session, setSession] = useState<AuthSession | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setSession(getSession());
    setChecked(true);
  }, []);

  if (!checked) return null;

  return (
    <main className="w-full bg-background text-text-primary min-h-screen">
      {session ? (
        <PortalView session={session} onLogout={() => setSession(null)} />
      ) : (
        <LoginView onLogin={(s) => setSession(s)} />
      )}
    </main>
  );
}

function LoginView({ onLogin }: { onLogin: (s: AuthSession) => void }) {
  const hint = demoCredentialHint("student");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const account = verifyLogin(email, code);
    if (!account) {
      setError("Invalid credentials. Use the demo student account shown below.");
      return;
    }
    createSession(account);
    onLogin(getSession()!);
  };

  const handleDemoLogin = () => {
    setEmail(hint.email);
    setCode(hint.code);
    createSession(hint);
    onLogin(getSession()!);
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
            href="/academy"
            className="inline-flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors mb-8"
          >
            <FaArrowLeft size={12} /> Back to Academy
          </Link>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-5">
              <FaGraduationCap size={28} />
            </div>
            <h1 className="text-2xl font-bold text-text-primary">Student Portal</h1>
            <p className="text-text-secondary text-sm mt-1 mb-6">
              Log in with the credentials you received by email after your registration was
              activated.
            </p>

            {error && (
              <div className="flex items-start gap-2 bg-error/10 border border-error/20 text-error text-[13px] rounded-xl px-4 py-3 mb-4">
                <FaExclamationCircle size={15} className="mt-0.5 shrink-0" />
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="stu-login-email" className="block text-xs font-semibold text-text-primary mb-1.5">
                  Email Address
                </label>
                <input
                  id="stu-login-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-gray-200 text-text-primary text-sm placeholder:text-text-secondary/60 focus:outline-none focus:border-accent transition-all"
                />
              </div>
              <div>
                <label htmlFor="stu-login-code" className="block text-xs font-semibold text-text-primary mb-1.5">
                  Access Code
                </label>
                <input
                  id="stu-login-code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="6-digit code"
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-gray-200 text-text-primary text-sm placeholder:text-text-secondary/60 focus:outline-none focus:border-accent transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3.5 rounded-full bg-accent text-white font-semibold text-sm hover:bg-primary transition-all"
              >
                Log In
              </button>
            </form>

            <div className="mt-6 bg-primary/5 border border-primary/10 rounded-2xl p-4">
              <p className="text-[11px] uppercase tracking-wider text-secondary font-bold mb-2">
                Demo Student Account
              </p>
              <p className="text-[13px] text-text-primary font-mono">
                {hint.email} / {hint.code}
              </p>
              <button
                onClick={handleDemoLogin}
                className="mt-3 w-full px-4 py-2.5 rounded-full bg-primary text-white text-[13px] font-semibold hover:bg-primary-dark transition-all"
              >
                One-Click Demo Login
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PortalView({ session, onLogout }: { session: AuthSession; onLogout: () => void }) {
  const { data: rawStudents = [], isLoading } = useStudents();
  const { data: rawCertificates = [] } = useCertificates({ email: session.email });
  const students = rawStudents as unknown as Student[];
  const certificates = rawCertificates as unknown as Certificate[];
  const student = useMemo(
    () => students.find((s) => s.email === session.email) ?? students[0],
    [students, session.email]
  );
  const [tab, setTab] = useState<Tab>("dashboard");
  const [showCertificate, setShowCertificate] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(t);
  }, [toast]);

  if (isLoading) {
    return (
      <div className="px-6 py-24 text-center">
        <p className="text-text-secondary text-sm">Loading...</p>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="px-6 py-24 text-center">
        <p className="text-text-secondary text-sm">Student record not found.</p>
      </div>
    );
  }

  const unreadCount = student.notifications.filter((n) => !n.read).length;
  const certificate = student.certificateId
    ? certificates.find((c) => c.id === student.certificateId)
    : undefined;
  const exam = seedExams.find((e) => e.course === student.course);

  const tabs: { id: Tab; label: string; icon: typeof FaBookOpen; badge?: number }[] = [
    { id: "dashboard", label: "Dashboard", icon: FaBookOpen },
    { id: "profile", label: "Profile", icon: FaUserCog },
    { id: "payments", label: "Payments", icon: FaFileInvoiceDollar },
    { id: "results", label: "Results & Grades", icon: FaAward },
    { id: "certificate", label: "Certificate", icon: FaFileDownload },
    { id: "notifications", label: "Notifications", icon: FaBell, badge: unreadCount },
  ];

  return (
    <section className="relative bg-surface min-h-screen overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pt-14 pb-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-secondary text-sm uppercase tracking-[0.2em] font-semibold mb-1">
              Student Portal
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-text-primary">
              Welcome, {student.name.split(" ")[0]}
            </h1>
            <p className="text-[13px] text-text-secondary mt-1">
              {student.course} · {student.cohort} · {student.mode}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                clearSession();
                onLogout();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-text-primary text-[13px] font-semibold hover:border-error hover:text-error transition-all"
            >
              <FaSignOutAlt size={13} /> Log Out
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold border transition-all ${
                tab === t.id
                  ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                  : "bg-white text-text-secondary border-gray-200 hover:border-accent hover:text-accent"
              }`}
            >
              <t.icon size={13} />
              {t.label}
              {t.badge ? (
                <span className="w-5 h-5 rounded-full bg-error text-white text-[10px] flex items-center justify-center">
                  {t.badge}
                </span>
              ) : null}
            </button>
          ))}
        </div>

        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-[60] bg-primary text-white text-sm font-semibold px-6 py-3 rounded-full shadow-xl flex items-center gap-2"
          >
            <FaCheckCircle size={15} className="text-success" />
            {toast}
          </motion.div>
        )}

        {tab === "dashboard" && (
          <DashboardTab student={student} exam={exam?.title} />
        )}
        {tab === "profile" && (
          <ProfileTab student={student} onToast={setToast} />
        )}
        {tab === "payments" && <PaymentsTab student={student} />}
        {tab === "results" && <ResultsTab student={student} onToast={setToast} />}
        {tab === "certificate" && (
          <CertificateTab
            student={student}
            certificate={certificate}
            onOpen={() => certificate && setShowCertificate(true)}
            onToast={setToast}
          />
        )}
        {tab === "notifications" && <NotificationsTab student={student} onToast={setToast} />}
      </div>

      {showCertificate && certificate && (
        <PrintableCertificate certificate={certificate} onClose={() => setShowCertificate(false)} />
      )}
    </section>
  );
}

function DashboardTab({ student, exam }: { student: Student; exam?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Cohort details */}
        <div className="bg-white border border-gray-200 rounded-3xl p-7">
          <h3 className="font-bold text-text-primary mb-4 flex items-center gap-2">
            <FaGraduationCap size={16} className="text-accent" /> Cohort Details
          </h3>
          <div className="space-y-3 text-[13px]">
            {[
              ["Course", student.course],
              ["Cohort", student.cohort],
              ["Learning Mode", student.mode],
              ["Application ID", student.applicationId],
              ["Status", student.status === "active" ? "Active" : student.status],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between border-b border-gray-50 pb-2">
                <span className="text-text-secondary">{k}</span>
                <span className="font-semibold text-text-primary">{v}</span>
              </div>
            ))}
          </div>
          {student.status === "pending-payment" && (
            <div className="mt-4 flex items-start gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-[12px] rounded-xl px-4 py-3">
              <FaExclamationTriangle size={14} className="mt-0.5 shrink-0" />
              Your enrolment is awaiting payment confirmation. See the Payments tab for details.
            </div>
          )}
        </div>

        {/* Modules & exam dates */}
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-3xl p-7">
            <h3 className="font-bold text-text-primary mb-4 flex items-center gap-2">
              <FaBookOpen size={15} className="text-accent" /> Assignment Schedule
            </h3>
            <div className="space-y-3">
              {student.assignments.map((a) => (
                <div key={a.title} className="flex items-center justify-between bg-surface border border-gray-100 rounded-xl px-4 py-3">
                  <div>
                    <p className="text-[13px] font-semibold text-text-primary">{a.title}</p>
                    <p className="text-[11px] text-text-secondary">Due {formatDate(a.due)}</p>
                  </div>
                  {a.score ? (
                    <span className="text-[12px] font-bold text-success bg-success/5 border border-success/20 px-2.5 py-1 rounded-full">
                      {a.score}
                    </span>
                  ) : (
                    <span className="text-[11px] text-text-secondary bg-white border border-gray-200 px-2.5 py-1 rounded-full">
                      Pending
                    </span>
                  )}
                </div>
              ))}
              {student.assignments.length === 0 && (
                <p className="text-[13px] text-text-secondary">No assignments yet.</p>
              )}
            </div>
          </div>

          <div className="bg-primary rounded-3xl p-7 relative overflow-hidden">
            <FloatingOrbs
              orbs={[
                { size: 200, color: "bg-secondary", x: 85, y: 15, duration: 16, delay: 0, blur: 80 },
              ]}
            />
            <div className="relative z-10">
              <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                <FaCalendarAlt size={15} className="text-accent-light" /> Upcoming Exam
              </h3>
              <p className="text-white/80 text-[13px]">{exam ?? "Final assessment"}</p>
              <p className="text-white font-semibold text-sm mt-1">
                {formatDate(student.examSchedule)}
              </p>
              <Link
                href="/exam"
                className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full bg-white text-primary text-[13px] font-semibold hover:bg-accent-light transition-all"
              >
                <FaShieldAlt size={13} /> Go to Exam Portal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProfileTab({
  student,
  onToast,
}: {
  student: Student;
  onToast: (msg: string) => void;
}) {
  const [form, setForm] = useState({
    email: student.email,
    phone: student.phone,
    whatsapp: student.whatsapp,
    address: student.address,
    bankAccount: "",
    bankName: "",
  });
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    onToast("Profile updated successfully");
    setTimeout(() => setSaved(false), 3000);
  };

  const inputCls =
    "w-full px-4 py-3 rounded-xl bg-surface border border-gray-200 text-text-primary text-sm placeholder:text-text-secondary/60 focus:outline-none focus:border-accent transition-all";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-1 lg:grid-cols-3 gap-6"
    >
      <div className="bg-white border border-gray-200 rounded-3xl p-7 lg:col-span-2">
        <h3 className="font-bold text-text-primary mb-6 flex items-center gap-2">
          <FaUserCog size={16} className="text-accent" /> Profile Management
        </h3>
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="pf-email" className="block text-xs font-semibold text-text-primary mb-1.5">
                Email Address
              </label>
              <input id="pf-email" className={inputCls} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <label htmlFor="pf-phone" className="block text-xs font-semibold text-text-primary mb-1.5">
                Phone Number
              </label>
              <input id="pf-phone" className={inputCls} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </div>
            <div>
              <label htmlFor="pf-whatsapp" className="block text-xs font-semibold text-text-primary mb-1.5">
                WhatsApp Number
              </label>
              <input id="pf-whatsapp" className={inputCls} value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} />
            </div>
            <div>
              <label htmlFor="pf-address" className="block text-xs font-semibold text-text-primary mb-1.5">
                Residential Address
              </label>
              <input id="pf-address" className={inputCls} value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
            </div>
            <div>
              <label htmlFor="pf-bank" className="block text-xs font-semibold text-text-primary mb-1.5">
                Bank Account (for refunds)
              </label>
              <input id="pf-bank" className={inputCls} placeholder="Account number" value={form.bankAccount} onChange={(e) => setForm({ ...form, bankAccount: e.target.value })} />
            </div>
            <div>
              <label htmlFor="pf-bankname" className="block text-xs font-semibold text-text-primary mb-1.5">
                Bank Name
              </label>
              <input id="pf-bankname" className={inputCls} placeholder="e.g. Providus Bank" value={form.bankName} onChange={(e) => setForm({ ...form, bankName: e.target.value })} />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold text-sm hover:bg-primary transition-all"
          >
            <FaSave size={14} /> Save Changes
          </button>
          {saved && (
            <span className="ml-3 text-[13px] text-success font-semibold">
              <FaCheckCircle size={13} className="inline mr-1" /> Saved
            </span>
          )}
        </form>
      </div>

      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-3xl p-7 text-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/10 flex items-center justify-center text-primary font-bold text-2xl mx-auto">
            {student.name
              .split(" ")
              .map((n: string) => n[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </div>
          <p className="font-bold text-text-primary mt-4">{student.name}</p>
          <p className="text-[13px] text-text-secondary">{student.course}</p>
          <button className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-surface border border-gray-200 text-[12px] font-semibold text-text-primary hover:border-accent hover:text-accent transition-all">
            <FaEdit size={11} /> Change Profile Photo
          </button>
        </div>
        <div className="bg-white border border-gray-200 rounded-3xl p-7">
          <p className="text-[11px] uppercase tracking-wider text-text-secondary font-semibold mb-3">
            Personal Details
          </p>
          <div className="space-y-2 text-[13px]">
            {[
              ["Date of Birth", student.dateOfBirth],
              ["Gender", student.gender],
              ["Nationality", student.nationality],
              ["State of Origin", student.stateOfOrigin],
              ["Qualification", student.qualification],
              ["Occupation", student.occupation],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between border-b border-gray-50 pb-2">
                <span className="text-text-secondary">{k}</span>
                <span className="font-semibold text-text-primary">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PaymentsTab({ student }: { student: Student }) {
  const [receipt, setReceipt] = useState<PaymentRecord | null>(null);
  void receipt;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="bg-white border border-gray-200 rounded-3xl p-7">
        <h3 className="font-bold text-text-primary mb-5 flex items-center gap-2">
          <FaFileInvoiceDollar size={16} className="text-accent" /> Payment History
        </h3>
        {student.payments.length === 0 ? (
          <p className="text-[13px] text-text-secondary">
            No payments recorded yet. {student.status === "pending-payment" ? "Complete your payment to activate your enrolment." : ""}
          </p>
        ) : (
          <div className="space-y-3">
            {student.payments.map((p) => (
              <div key={p.id} className="flex flex-col sm:flex-row sm:items-center justify-between bg-surface border border-gray-100 rounded-2xl px-5 py-4">
                <div>
                  <p className="font-bold text-text-primary">{p.amount}</p>
                  <p className="text-[12px] text-text-secondary mt-0.5">{p.method} · {formatDate(p.date)}</p>
                  <p className="text-[11px] text-text-secondary">Receipt: {p.receiptNo}</p>
                </div>
                <div className="flex items-center gap-3 mt-3 sm:mt-0">
                  <span
                    className={`text-[11px] font-bold px-3 py-1 rounded-full ${
                      p.status === "confirmed"
                        ? "bg-success/10 text-success border border-success/20"
                        : "bg-amber-50 text-amber-600 border border-amber-200"
                    }`}
                  >
                    {p.status === "confirmed" ? "Confirmed" : "Pending"}
                  </span>
                  <button
                    onClick={() => setReceipt(p)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-gray-200 text-[12px] font-semibold text-text-primary hover:border-accent hover:text-accent transition-all"
                  >
                    <FaReceipt size={12} /> View Receipt
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="bg-white border border-gray-200 rounded-3xl p-7">
        <h3 className="font-bold text-text-primary mb-4">Make a Payment</h3>
        <div className="space-y-3">
          {[
            ["Account Name", "NICEGENE TECHNOLOGY SOLUTIONS LTD"],
            ["Account Number", "1309125177"],
            ["Bank Name", "Providus Bank"],
          ].map(([k, v]) => (
            <div key={k} className="flex items-center justify-between bg-surface border border-gray-100 rounded-xl px-4 py-3">
              <span className="text-[12px] text-text-secondary">{k}</span>
              <span className={`text-sm font-semibold ${k === "Account Number" ? "text-accent tracking-wider" : "text-text-primary"}`}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ResultsTab({ student, onToast }: { student: Student; onToast: (m: string) => void }) {
  const passMark = 50;
  const passed = typeof student.examScore === "number" && student.examScore >= passMark;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="bg-white border border-gray-200 rounded-3xl p-7">
        <h3 className="font-bold text-text-primary mb-5 flex items-center gap-2">
          <FaAward size={16} className="text-accent" /> Assignment Grades
        </h3>
        <div className="space-y-3">
          {student.assignments
            .filter((a) => a.score)
            .map((a) => (
              <div key={a.title} className="flex items-center justify-between bg-surface border border-gray-100 rounded-xl px-4 py-3">
                <span className="text-[13px] font-semibold text-text-primary">{a.title}</span>
                <span className="text-[12px] font-bold text-success bg-success/5 border border-success/20 px-2.5 py-1 rounded-full">{a.score}</span>
              </div>
            ))}
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-3xl p-7">
        <h3 className="font-bold text-text-primary mb-5">Final Exam Result</h3>
        {student.examDone && student.examReleased ? (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-[12px] text-text-secondary">{student.course} — Final Assessment</p>
              <p className="text-3xl font-bold text-text-primary mt-1">
                {student.examScore}%{" "}
                <span
                  className={`text-sm font-semibold ml-2 ${passed ? "text-success" : "text-error"}`}
                >
                  {passed ? "PASS" : "FAIL"}
                </span>
              </p>
            </div>
            {passed && !student.certificateId && (
              <button
                onClick={() => onToast("Certificate generation is handled by the administration team")}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent text-white text-[13px] font-semibold hover:bg-primary transition-all"
              >
                <FaAward size={13} /> Request Certificate
              </button>
            )}
          </div>
        ) : student.examDone ? (
          <p className="text-[13px] text-text-secondary flex items-center gap-2">
            <FaExclamationCircle size={14} className="text-amber-500" />
            Your result has been submitted and is awaiting release by the examinations team.
          </p>
        ) : (
          <p className="text-[13px] text-text-secondary">
            You have not sat your final exam yet. Your exam is scheduled for{" "}
            <span className="font-semibold text-text-primary">{formatDate(student.examSchedule)}</span>.{" "}
            <Link href="/exam" className="text-accent font-semibold hover:text-primary">
              Go to the Exam Portal
            </Link>
          </p>
        )}
      </div>
    </motion.div>
  );
}

function CertificateTab({
  student,
  certificate,
  onOpen,
  onToast,
}: {
  student: Student;
  certificate?: Certificate;
  onOpen: () => void;
  onToast: (m: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border border-gray-200 rounded-3xl p-8 text-center"
    >
      {certificate ? (
        <>
          <div className="w-16 h-16 rounded-2xl bg-success/10 flex items-center justify-center text-success mx-auto mb-4">
            <FaAward size={28} />
          </div>
          <h3 className="text-xl font-bold text-text-primary">Certificate Awarded</h3>
          <p className="text-[13px] text-text-secondary mt-2 max-w-md mx-auto">
            Congratulations! Your certificate of completion for {student.course} has been issued.
            Download it as a PDF or verify its authenticity instantly.
          </p>
          <div className="inline-flex items-center gap-2 mt-4 font-mono text-sm font-bold text-accent bg-accent/5 border border-accent/20 px-4 py-2 rounded-xl">
            {certificate.id}
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <button
              onClick={onOpen}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-accent text-white font-semibold text-sm hover:bg-primary transition-all"
            >
              <FaFileDownload size={14} /> Download Certificate (PDF)
            </button>
            <Link
              href={`/verify/${certificate.id}`}
              target="_blank"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white border border-gray-200 text-text-primary font-semibold text-sm hover:border-accent hover:text-accent transition-all"
            >
              <FaShieldAlt size={13} /> Verify Certificate
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="w-16 h-16 rounded-2xl bg-surface flex items-center justify-center text-text-secondary/50 mx-auto mb-4">
            <FaAward size={28} />
          </div>
          <h3 className="text-xl font-bold text-text-primary">No Certificate Yet</h3>
          <p className="text-[13px] text-text-secondary mt-2 max-w-md mx-auto">
            Certificates are issued after you complete your programme and pass the final
            assessment. Once issued, your certificate will appear here with a downloadable PDF.
          </p>
          {student.examDone && (
            <button
              onClick={() => onToast("Certificate generation is handled by the administration team")}
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white text-[13px] font-semibold hover:bg-primary transition-all"
            >
              <FaAward size={13} /> Request Certificate
            </button>
          )}
        </>
      )}
    </motion.div>
  );
}

function NotificationsTab({ student, onToast }: { student: Student; onToast: (m: string) => void }) {
  const [notifications, setNotifications] = useState(student.notifications);

  const markAllRead = () => {
    const updated = notifications.map((n) => ({ ...n, read: true }));
    setNotifications(updated);
    onToast("All notifications marked as read");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border border-gray-200 rounded-3xl p-7"
    >
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-bold text-text-primary flex items-center gap-2">
          <FaBell size={15} className="text-accent" /> Notifications
        </h3>
        {notifications.some((n) => !n.read) && (
          <button
            onClick={markAllRead}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-gray-200 text-[12px] font-semibold text-text-primary hover:border-accent hover:text-accent transition-all"
          >
            <FaCheckDouble size={12} /> Mark all as read
          </button>
        )}
      </div>
      <div className="space-y-3">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`flex items-start gap-3 rounded-2xl border px-5 py-4 ${
              n.read ? "bg-surface border-gray-100" : "bg-primary/5 border-primary/20"
            }`}
          >
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                n.read ? "bg-white text-text-secondary border border-gray-200" : "bg-accent text-white"
              }`}
            >
              <FaBell size={14} />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[13px] font-bold text-text-primary">{n.title}</p>
                <span className="text-[11px] text-text-secondary shrink-0">
                  {new Date(n.date).toLocaleDateString("en-NG", { day: "numeric", month: "short" })}
                </span>
              </div>
              <p className="text-[13px] text-text-secondary mt-1 leading-relaxed">{n.body}</p>
            </div>
          </div>
        ))}
        {notifications.length === 0 && (
          <p className="text-[13px] text-text-secondary text-center py-8">
            No notifications yet.
          </p>
        )}
      </div>
    </motion.div>
  );
}