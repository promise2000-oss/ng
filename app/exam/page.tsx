"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import {
  FaShieldAlt,
  FaClock,
  FaFlag,
  FaFlagCheckered,
  FaArrowLeft,
  FaArrowRight,
  FaExclamationTriangle,
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationCircle,
  FaPaperPlane,
  FaGraduationCap,
  FaUserCircle,
} from "react-icons/fa";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import GridOverlay from "@/components/animations/GridOverlay";
import { STORE_KEYS, loadStore, saveStore } from "@/lib/store";
import {
  questionBank,
  seedExams,
  seedStudents,
  demoStudentId,
  seedCertificates,
  type ExamQuestion,
} from "@/lib/seed-data";
import { defaultSiteConfig } from "@/lib/seed-data";
import {
  verifyLogin,
  createSession,
  getSession,
  clearSession,
  demoCredentialHint,
  type AuthSession,
} from "@/lib/demo-auth";

type ExamAnswers = Record<string, string | string[]>;
type SessionState = {
  examId: string;
  startedAt: number;
  remainingMs: number;
  current: number;
  flagged: string[];
  answers: ExamAnswers;
  exitAttempts: number;
};

type Result = {
  score: number;
  total: number;
  passed: boolean;
  graded: { questionId: string; correct: boolean; obtained: number }[];
  pendingShort: string[];
};

function formatTime(ms: number): string {
  const total = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export default function ExamPortal() {
  const [session, setSession] = useState<AuthSession | null>(null);
  const [checked, setChecked] = useState(false);
  const [examState, setExamState] = useState<
    "login" | "lobby" | "running" | "submitted" | "results"
  >("login");
  const [result, setResult] = useState<Result | null>(null);

  useEffect(() => {
    const s = getSession();
    setSession(s);
    const active = loadStore<SessionState | null>(STORE_KEYS.examActive, () => null) as SessionState | null;
    if (s && active) {
      setExamState("running");
    } else if (s) {
      setExamState("lobby");
    }
    setChecked(true);
  }, []);

  const handleLogin = (s: AuthSession) => {
    setSession(s);
    setExamState("lobby");
  };

  const handleLogout = () => {
    clearSession();
    setSession(null);
    setExamState("login");
  };

  const handleStart = () => {
    const exam = seedExams[0];
    const initial: SessionState = {
      examId: exam.id,
      startedAt: Date.now(),
      remainingMs: exam.durationMinutes * 60 * 1000,
      current: 0,
      flagged: [],
      answers: {},
      exitAttempts: 0,
    };
    saveStore(STORE_KEYS.examActive, initial);
    setExamState("running");
  };

  const handleSubmitted = (r: Result) => {
    setResult(r);
    setExamState("submitted");
  };

  const handleViewResults = (r: Result) => {
    setResult(r);
    setExamState("results");
  };

  if (!checked) return null;

  return (
    <main className="w-full bg-background text-text-primary min-h-screen">
      {examState === "login" && <ExamLogin onLogin={handleLogin} />}
      {(examState === "lobby" || examState === "submitted") && (
        <ExamLobby
          session={session!}
          onLogout={handleLogout}
          onStart={handleStart}
          onSubmitted={handleSubmitted}
          result={examState === "submitted" ? result : null}
          onViewResults={handleViewResults}
        />
      )}
      {examState === "running" && session && (
        <ExamRunner session={session} onLogout={handleLogout} onSubmitted={handleSubmitted} />
      )}
      {examState === "results" && result && (
        <ExamResults
          result={result}
          session={session!}
          onLogout={handleLogout}
          onExit={() => {
            setExamState("lobby");
          }}
        />
      )}
    </main>
  );
}

function ExamLogin({ onLogin }: { onLogin: (s: AuthSession) => void }) {
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

  const handleDemo = () => {
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
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
              <FaShieldAlt size={24} className="text-accent-light" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Exam Portal</h1>
              <p className="text-white/60 text-sm">NICEGENE Digital Academy</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <p className="text-text-secondary text-sm mb-1">Student Authentication</p>
            <h2 className="text-xl font-bold text-text-primary mb-1">Secure Log In</h2>
            <p className="text-[13px] text-text-secondary mb-6">
              Exam access tokens and links are sent to your email 24 hours before your exam.
              Identity verification happens here before the exam can begin.
            </p>

            {error && (
              <div className="flex items-start gap-2 bg-error/10 border border-error/20 text-error text-[13px] rounded-xl px-4 py-3 mb-4">
                <FaExclamationCircle size={15} className="mt-0.5 shrink-0" />
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="exam-email" className="block text-xs font-semibold text-text-primary mb-1.5">
                  Student Email
                </label>
                <input
                  id="exam-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@nicegene.com"
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-gray-200 text-text-primary text-sm placeholder:text-text-secondary/60 focus:outline-none focus:border-accent transition-all"
                />
              </div>
              <div>
                <label htmlFor="exam-code" className="block text-xs font-semibold text-text-primary mb-1.5">
                  Identity Verification Code
                </label>
                <input
                  id="exam-code"
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
                Verify &amp; Continue
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
                onClick={handleDemo}
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

function ExamLobby({
  session,
  onLogout,
  onStart,
  result,
  onViewResults,
}: {
  session: AuthSession;
  onLogout: () => void;
  onStart: () => void;
  onSubmitted: (r: Result) => void;
  result: Result | null;
  onViewResults: (r: Result) => void;
}) {
  const exam = seedExams[0];
  const [students] = useState(() => loadStore(STORE_KEYS.students, () => seedStudents));
  const student = students.find((s) => s.id === session.accountId) ?? students[0];

  return (
    <section className="relative bg-surface min-h-screen overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-6 pt-14 pb-24">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-secondary text-sm uppercase tracking-[0.2em] font-semibold mb-1">
              Exam Dashboard
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-text-primary">
              Welcome, {session.name.split(" ")[0]}
            </h1>
            <p className="text-[13px] text-text-secondary mt-1">{student?.course}</p>
          </div>
          <button
            onClick={onLogout}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-[13px] font-semibold text-text-primary hover:border-error hover:text-error transition-all"
          >
            Log Out
          </button>
        </div>

        {result ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-gray-200 rounded-3xl p-10 text-center shadow-xl shadow-primary/5"
          >
            {result.passed ? (
              <FaCheckCircle size={56} className="text-success mx-auto mb-4" />
            ) : (
              <FaTimesCircle size={56} className="text-error mx-auto mb-4" />
            )}
            <h2 className="text-2xl font-bold text-text-primary">
              {result.passed ? "Exam Submitted — Passed" : "Exam Submitted"}
            </h2>
            <p className="text-text-secondary text-sm mt-3 max-w-md mx-auto">
              Your exam has been submitted successfully and cannot be reopened. Your results have
              been processed.
            </p>
            <div className="inline-flex items-center gap-3 mt-6 bg-surface border border-gray-100 rounded-2xl px-6 py-4">
              <span className="text-3xl font-bold text-text-primary">{result.score}%</span>
              <span className="text-[12px] text-text-secondary text-left">
                of {result.total} marks
                <br />
                Pass mark: {seedExams[0].passMark}%
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <button
                onClick={() => onViewResults(result)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold text-sm hover:bg-primary transition-all"
              >
                View My Results
              </button>
              <Link
                href="/academy/student"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-text-primary font-semibold text-sm hover:border-accent hover:text-accent transition-all"
              >
                Go to Student Portal
              </Link>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-xl shadow-primary/5"
          >
            <div className="bg-primary px-8 py-6 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-white">{exam.title}</h2>
                <p className="text-white/70 text-sm mt-0.5">{student?.cohort}</p>
              </div>
              <div className="text-center">
                <p className="text-white/60 text-[11px] uppercase tracking-wider">Time Allowed</p>
                <p className="text-white font-bold text-xl">{exam.durationMinutes} min</p>
              </div>
            </div>

            <div className="p-8">
              <h3 className="font-bold text-text-primary mb-4">Instructions</h3>
              <ul className="space-y-3">
                {exam.instructions.map((inst, i) => (
                  <li key={i} className="flex items-start gap-3 text-[13px] text-text-secondary">
                    <FaCheckCircle size={13} className="text-accent mt-0.5 shrink-0" />
                    {inst}
                  </li>
                ))}
              </ul>

              <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex items-start gap-2">
                <FaExclamationTriangle size={14} className="text-amber-600 mt-0.5 shrink-0" />
                <p className="text-[12px] text-amber-700">
                  Demo mode: your scheduled exam window is {student?.examSchedule}. For this
                  demonstration, the window is open now. The timer starts when you click Begin
                  Exam and cannot be paused.
                </p>
              </div>

              <button
                onClick={onStart}
                className="mt-8 w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-bold text-sm hover:bg-primary transition-all"
              >
                <FaPaperPlane size={14} />
                Begin Exam
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function ExamRunner({
  session,
  onLogout,
  onSubmitted,
}: {
  session: AuthSession;
  onLogout: () => void;
  onSubmitted: (r: Result) => void;
}) {
  const exam = seedExams[0];
  const questions = useMemo(
    () => exam.questionIds.map((id) => questionBank.find((q) => q.id === id)!).filter(Boolean),
    [exam]
  );
  const [state, setState] = useState<SessionState>(() => {
    const existing = loadStore<SessionState | null>(STORE_KEYS.examActive, () => null);
    return existing ?? {
      examId: exam.id,
      startedAt: Date.now(),
      remainingMs: exam.durationMinutes * 60 * 1000,
      current: 0,
      flagged: [],
      answers: {},
      exitAttempts: 0,
    };
  });
  const [alert, setAlert] = useState<string | null>(null);
  const submittedRef = useRef(false);
  const config = defaultSiteConfig;
  const fullscreenEnforced = config.examFullscreenEnforced;

  const persist = useCallback((s: SessionState) => {
    saveStore(STORE_KEYS.examActive, s);
  }, []);

  const finishExam = useCallback(
    (finalAnswers: ExamAnswers) => {
      if (submittedRef.current) return;
      submittedRef.current = true;

      const graded: Result["graded"] = [];
      let score = 0;
      let total = 0;
      const pendingShort: string[] = [];

      for (const q of questions) {
        total += q.marks;
        const given = finalAnswers[q.id];
        if (q.type === "single" || q.type === "truefalse") {
          const correct = given === q.answer;
          if (correct) score += q.marks;
          graded.push({ questionId: q.id, correct, obtained: correct ? q.marks : 0 });
        } else if (q.type === "multiple") {
          const expected = (q.answer as string[]).slice().sort().join("|");
          const chosen = Array.isArray(given) ? given.slice().sort().join("|") : "";
          const correct = chosen === expected;
          if (correct) score += q.marks;
          graded.push({ questionId: q.id, correct, obtained: correct ? q.marks : 0 });
        } else {
          pendingShort.push(q.id);
        }
      }

      const pct = Math.round((score / total) * 100);
      const passed = pct >= exam.passMark;
      const result: Result = { score: pct, total, passed, graded, pendingShort };

      // Update the student record (demo grade release)
      const students = loadStore<typeof seedStudents>(STORE_KEYS.students, () => seedStudents);
      const idx = students.findIndex((s) => s.id === demoStudentId);
      if (idx >= 0) {
        students[idx].examDone = true;
        students[idx].examScore = pct;
        students[idx].examReleased = true;
        if (!passed) {
          students[idx].certificateId = undefined;
          const certs = loadStore(STORE_KEYS.certificates, () => seedCertificates);
          const ci = certs.findIndex((c) => c.id === "NDA-2026-CLD-0051");
          if (ci >= 0) certs.splice(ci, 1);
          saveStore(STORE_KEYS.certificates, certs);
        }
        students[idx].notifications = [
          {
            id: `ntf-${crypto.randomUUID()}`,
            title: "Exam result released",
            body: `Your ${exam.title} result has been released: ${pct}% (${passed ? "PASS" : "FAIL"}).`,
            date: new Date().toISOString(),
            read: false,
          },
          ...students[idx].notifications,
        ];
        saveStore(STORE_KEYS.students, students);
      }

      saveStore(STORE_KEYS.examActive, null);
      onSubmitted(result);
    },
    [exam, questions, onSubmitted]
  );

  // Countdown
  useEffect(() => {
    if (submittedRef.current) return;
    const tick = setInterval(() => {
      setState((prev) => {
        const remainingMs = prev.remainingMs - 1000;
        if (remainingMs <= 0) {
          clearInterval(tick);
          setTimeout(() => finishExam(prev.answers), 0);
          return { ...prev, remainingMs: 0 };
        }
        const next = { ...prev, remainingMs };
        persist(next);
        return next;
      });
    }, 1000);
    return () => clearInterval(tick);
  }, [finishExam, persist]);

  // Auto-save every 30s
  useEffect(() => {
    const saver = setInterval(() => {
      setState((prev) => {
        persist(prev);
        return prev;
      });
    }, config.examAutoSaveSeconds * 1000);
    return () => clearInterval(saver);
  }, [config.examAutoSaveSeconds, persist]);

  // Fullscreen enforcement
  useEffect(() => {
    if (!fullscreenEnforced) return;
    const onFsChange = () => {
      if (!document.fullscreenElement) {
        setState((prev) => {
          const next = { ...prev, exitAttempts: prev.exitAttempts + 1 };
          persist(next);
          setAlert("Full-screen mode exited. This counts as an exam exit attempt. Please stay in full-screen during the exam.");
          return next;
        });
      }
    };
    const onVisibility = () => {
      if (document.hidden) {
        setState((prev) => {
          const next = { ...prev, exitAttempts: prev.exitAttempts + 1 };
          persist(next);
          setAlert("You switched away from the exam tab. This exit attempt has been recorded.");
          return next;
        });
      }
    };
    const onBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!submittedRef.current) {
        e.preventDefault();
        e.returnValue = "Your exam is still in progress. Submitting will auto-submit your answers.";
      }
    };
    document.addEventListener("fullscreenchange", onFsChange);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => {
      document.removeEventListener("fullscreenchange", onFsChange);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("beforeunload", onBeforeUnload);
    };
  }, [fullscreenEnforced, persist]);

  // Request fullscreen on mount
  useEffect(() => {
    if (fullscreenEnforced && !document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {
        setAlert("Unable to enter full-screen mode. Please enable it in your browser settings.");
      });
    }
    return () => {
      if (document.fullscreenElement) {
        document.exitFullscreen?.().catch(() => undefined);
      }
    };
  }, [fullscreenEnforced]);

  const question: ExamQuestion = questions[state.current];
  const answeredCount = Object.keys(state.answers).length;
  const submitNow = () => {
    const ok = window.confirm(
      `You have answered ${answeredCount} of ${questions.length} questions. Submit your exam now?`
    );
    if (ok) finishExam(state.answers);
  };

  const setAnswer = (value: string | string[]) => {
    setState((prev) => {
      const next = { ...prev, answers: { ...prev.answers, [question.id]: value } };
      persist(next);
      return next;
    });
  };

  const toggleFlag = () => {
    setState((prev) => {
      const flagged = prev.flagged.includes(question.id)
        ? prev.flagged.filter((f) => f !== question.id)
        : [...prev.flagged, question.id];
      const next = { ...prev, flagged };
      persist(next);
      return next;
    });
  };

  const goTo = (index: number) => {
    setState((prev) => ({ ...prev, current: index }));
  };

  const isAnswered = (q: ExamQuestion) => {
    const a = state.answers[q.id];
    return Array.isArray(a) ? a.length > 0 : a !== undefined && a !== "";
  };

  return (
    <section className="min-h-screen bg-primary-darker text-white">
      {/* Top bar */}
      <header className="sticky top-20 z-40 bg-primary border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <FaShieldAlt size={16} className="text-accent-light" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold leading-tight truncate">{exam.title}</p>
              <p className="text-[11px] text-white/60 truncate">{session.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <div className="hidden sm:flex items-center gap-2 text-[12px] text-white/70">
              <FaExclamationTriangle size={13} className="text-amber-400" />
              Exit attempts: {state.exitAttempts}
            </div>
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono font-bold text-lg ${
                state.remainingMs < 60 * 1000
                  ? "bg-error text-white animate-pulse"
                  : "bg-white/10 text-white"
              }`}
            >
              <FaClock size={15} />
              {formatTime(state.remainingMs)}
            </div>
          </div>
        </div>
      </header>

      {alert && (
        <div className="bg-amber-500/90 text-primary-darker px-4 py-3 text-center text-[13px] font-semibold flex items-center justify-center gap-2">
          <FaExclamationTriangle size={14} />
          {alert}
          <button
            onClick={() => setAlert(null)}
            className="underline font-bold ml-2"
            aria-label="Dismiss alert"
          >
            Dismiss
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
        {/* Question area */}
        <div className="bg-primary rounded-3xl p-6 md:p-10 relative overflow-hidden">
          <FloatingOrbs
            orbs={[
              { size: 300, color: "bg-secondary", x: 85, y: 15, duration: 18, delay: 0, blur: 110 },
            ]}
          />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[11px] uppercase tracking-wider text-accent-light font-semibold">
                Question {state.current + 1} of {questions.length}
              </span>
              <button
                onClick={toggleFlag}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-semibold border transition-all ${
                  state.flagged.includes(question.id)
                    ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                    : "bg-white/5 text-white/70 border-white/10 hover:border-amber-500/40"
                }`}
              >
                {state.flagged.includes(question.id) ? <FaFlagCheckered size={12} /> : <FaFlag size={12} />}
                {state.flagged.includes(question.id) ? "Flagged" : "Flag for review"}
              </button>
            </div>

            <h2 className="text-lg md:text-xl font-semibold text-white leading-relaxed">
              {question.prompt}
            </h2>
            <p className="text-[11px] text-white/50 mt-2">
              {question.type === "single" && "Select one answer"}
              {question.type === "multiple" && "Select all that apply"}
              {question.type === "truefalse" && "Select True or False"}
              {question.type === "short" && "Type your answer"}
              {" · "}
              {question.marks} marks
            </p>

            <div className="mt-8 space-y-3">
              {question.type === "single" || question.type === "truefalse" ? (
                question.options?.map((opt) => {
                  const active = state.answers[question.id] === opt;
                  return (
                    <button
                      key={opt}
                      onClick={() => setAnswer(opt)}
                      className={`w-full text-left px-5 py-4 rounded-2xl border text-sm font-medium transition-all ${
                        active
                          ? "bg-accent border-accent text-white shadow-lg shadow-accent/20"
                          : "bg-white/5 border-white/10 text-white/80 hover:border-accent/50 hover:bg-white/10"
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })
              ) : question.type === "multiple" ? (
                question.options?.map((opt) => {
                  const chosen = (state.answers[question.id] as string[] | undefined) ?? [];
                  const active = chosen.includes(opt);
                  return (
                    <button
                      key={opt}
                      onClick={() => {
                        const next = active ? chosen.filter((c) => c !== opt) : [...chosen, opt];
                        setAnswer(next);
                      }}
                      className={`w-full text-left px-5 py-4 rounded-2xl border text-sm font-medium transition-all flex items-center justify-between ${
                        active
                          ? "bg-accent border-accent text-white shadow-lg shadow-accent/20"
                          : "bg-white/5 border-white/10 text-white/80 hover:border-accent/50 hover:bg-white/10"
                      }`}
                    >
                      {opt}
                      <span
                        className={`w-5 h-5 rounded-md border flex items-center justify-center text-[10px] ${
                          active ? "bg-white text-accent border-white" : "border-white/30"
                        }`}
                      >
                        {active ? "X" : ""}
                      </span>
                    </button>
                  );
                })
              ) : (
                <textarea
                  value={(state.answers[question.id] as string) ?? ""}
                  onChange={(e) => setAnswer(e.target.value)}
                  rows={6}
                  placeholder="Type your answer here..."
                  className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-all"
                />
              )}
            </div>

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
              <button
                onClick={() => goTo(Math.max(0, state.current - 1))}
                disabled={state.current === 0}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-[13px] font-semibold hover:bg-white/10 transition-all disabled:opacity-30"
              >
                <FaArrowLeft size={11} /> Previous
              </button>
              {state.current < questions.length - 1 ? (
                <button
                  onClick={() => goTo(state.current + 1)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-[13px] font-semibold hover:bg-primary transition-all"
                >
                  Next <FaArrowRight size={11} />
                </button>
              ) : (
                <button
                  onClick={submitNow}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-success text-white text-[13px] font-bold hover:bg-green-700 transition-all"
                >
                  <FaPaperPlane size={12} /> Submit Exam
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Navigation panel */}
        <aside className="bg-primary rounded-3xl p-6 h-fit lg:sticky lg:top-24">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-white text-sm">Questions</h3>
            <span className="text-[11px] text-white/60">
              {answeredCount}/{questions.length} answered
            </span>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {questions.map((q, i) => {
              const answered = isAnswered(q);
              const flagged = state.flagged.includes(q.id);
              const current = i === state.current;
              return (
                <button
                  key={q.id}
                  onClick={() => goTo(i)}
                  className={`relative h-10 rounded-xl text-[12px] font-bold transition-all ${
                    current
                      ? "bg-accent text-white ring-2 ring-accent-light/50"
                      : answered
                        ? "bg-success/90 text-white"
                        : flagged
                          ? "bg-amber-500/90 text-white"
                          : "bg-white/10 text-white/70 hover:bg-white/20"
                  }`}
                  aria-label={`Question ${i + 1}, ${answered ? "answered" : "unanswered"}${flagged ? ", flagged" : ""}`}
                >
                  {i + 1}
                  {flagged && (
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 border border-primary" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-6 space-y-2 text-[11px] text-white/60">
            <p className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-success/90 inline-block" /> Answered
            </p>
            <p className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-amber-500/90 inline-block" /> Flagged
            </p>
            <p className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-white/10 inline-block" /> Unanswered
            </p>
          </div>

          <button
            onClick={submitNow}
            className="mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-primary text-[13px] font-bold hover:bg-accent-light transition-all"
          >
            <FaPaperPlane size={12} /> Submit Exam
          </button>
          <p className="text-center text-[10px] text-white/40 mt-3">
            Auto-saved every {config.examAutoSaveSeconds}s · Auto-submits on expiry
          </p>
        </aside>
      </div>
    </section>
  );
}

function ExamResults({
  result,
  session,
  onLogout,
  onExit,
}: {
  result: Result;
  session: AuthSession;
  onLogout: () => void;
  onExit: () => void;
}) {
  const exam = seedExams[0];
  const questions = useMemo(
    () => exam.questionIds.map((id) => questionBank.find((q) => q.id === id)!).filter(Boolean),
    [exam]
  );
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="relative bg-surface min-h-screen overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-6 pt-14 pb-24">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-secondary text-sm uppercase tracking-[0.2em] font-semibold mb-1">
              Exam Results
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-text-primary">
              {exam.title}
            </h1>
            <p className="text-[13px] text-text-secondary mt-1">{session.name}</p>
          </div>
          <button
            onClick={onLogout}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-[13px] font-semibold text-text-primary hover:border-error hover:text-error transition-all"
          >
            Log Out
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-3xl p-8 text-center mb-6 ${
            result.passed ? "bg-success" : "bg-error"
          }`}
        >
          {result.passed ? (
            <FaCheckCircle size={48} className="text-white mx-auto mb-3" />
          ) : (
            <FaTimesCircle size={48} className="text-white mx-auto mb-3" />
          )}
          <p className="text-4xl font-bold text-white">{result.score}%</p>
          <p className="text-white/80 text-sm mt-1">
            {result.passed ? "PASS — well done!" : "Below the pass mark"}
          </p>
        </motion.div>

        <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-xl shadow-primary/5">
          <div className="px-8 py-5 border-b border-gray-100 flex items-center justify-between">
            <h3 className="font-bold text-text-primary">Answer Review</h3>
            <span className="text-[12px] text-text-secondary">
              Objective questions graded automatically
            </span>
          </div>
          <div className="divide-y divide-gray-50">
            {questions.map((q, i) => {
              const graded = result.graded.find((g) => g.questionId === q.id);
              const pending = result.pendingShort.includes(q.id);
              return (
                <div key={q.id}>
                  <button
                    onClick={() => setOpenId(openId === q.id ? null : q.id)}
                    className="w-full flex items-center gap-4 px-8 py-4 text-left hover:bg-surface/50 transition-colors"
                  >
                    {graded ? (
                      graded.correct ? (
                        <FaCheckCircle size={16} className="text-success shrink-0" />
                      ) : (
                        <FaTimesCircle size={16} className="text-error shrink-0" />
                      )
                    ) : pending ? (
                      <FaClock size={16} className="text-amber-500 shrink-0" />
                    ) : null}
                    <span className="text-[13px] font-medium text-text-primary flex-1">
                      Q{i + 1}. {q.prompt}
                    </span>
                    <span className="text-[12px] font-bold text-text-secondary shrink-0">
                      {graded ? `${q.marks} marks` : "Awaiting review"}
                    </span>
                  </button>
                  {openId === q.id && (
                    <div className="px-8 pb-5 pl-[72px] space-y-2">
                      {graded && !graded.correct && q.options && (
                        <p className="text-[13px] text-success">
                          Correct answer: <span className="font-semibold">{q.answer}</span>
                        </p>
                      )}
                      {pending && (
                        <p className="text-[13px] text-text-secondary">
                          Your short answer has been submitted for review by the examiners. It
                          does not count toward the auto-graded score.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <Link
            href="/academy/student"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-accent text-white font-semibold text-sm hover:bg-primary transition-all"
          >
            <FaGraduationCap size={14} /> Go to Student Portal
          </Link>
          <button
            onClick={onExit}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white border border-gray-200 text-text-primary font-semibold text-sm hover:border-accent hover:text-accent transition-all"
          >
            <FaArrowLeft size={12} /> Back to Exam Dashboard
          </button>
        </div>
      </div>
    </section>
  );
}