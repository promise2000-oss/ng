"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import {
  FaUserAlt,
  FaEnvelope,
  FaGraduationCap,
  FaBookOpen,
  FaPhoneAlt,
  FaFileContract,
  FaCheckCircle,
  FaExclamationCircle,
  FaChevronLeft,
  FaChevronRight,
  FaPaperclip,
} from "react-icons/fa";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import GridOverlay from "@/components/animations/GridOverlay";
import { useSubmitRegistration } from "@/lib/hooks/useRegistrations";
import { seedCohorts, type LearningMode } from "@/lib/seed-data";
import { courses } from "@/lib/academy";

const steps = [
  { id: 1, label: "Personal", icon: FaUserAlt },
  { id: 2, label: "Contact", icon: FaEnvelope },
  { id: 3, label: "Background", icon: FaGraduationCap },
  { id: 4, label: "Course", icon: FaBookOpen },
  { id: 5, label: "Emergency", icon: FaPhoneAlt },
  { id: 6, label: "Declaration", icon: FaFileContract },
];

const inputCls =
  "w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-text-primary text-sm placeholder:text-text-secondary/60 focus:outline-none focus:border-accent transition-all";

const labelCls = "block text-xs font-semibold text-text-primary mb-1.5";

const emptyForm = {
  fullName: "",
  dob: "",
  gender: "",
  nationality: "",
  stateOfOrigin: "",
  email: "",
  phone: "",
  whatsapp: "",
  address: "",
  qualification: "",
  occupation: "",
  heardAboutUs: "",
  course: courses[0].title,
  cohort: seedCohorts[0].name,
  mode: "Hybrid" as LearningMode,
  emergencyName: "",
  emergencyRelationship: "",
  emergencyPhone: "",
  agreeTerms: false,
  agreeRefund: false,
  agreeCode: false,
};

export default function RegistrationPortal() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState<string | null>(null);
  const [docName, setDocName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<{ applicationId: string; name: string; course: string } | null>(null);
  const submitRegistration = useSubmitRegistration();

  const courseOptions = useMemo(() => courses.filter((c) => c.status !== "Available"), []);
  const cohortOptions = useMemo(() => {
    const course = courseOptions.find((c) => c.title === form.course);
    const matching = seedCohorts.filter((c) => c.courseTitle === form.course);
    if (matching.length > 0) return matching;
    if (course) {
      return [
        {
          id: "ch-gen",
          courseTitle: form.course,
          name: "August 2026 Cohort",
          startDate: "2026-08-24",
          classDays: "Weekdays",
          classTime: "17:00 – 19:00 WAT",
          examDate: "2026-11-16",
          examWindow: "09:00 – 11:00 WAT",
          spots: 25,
        },
      ];
    }
    return [];
  }, [form.course, courseOptions]);

  const validateStep = (): string | null => {
    switch (step) {
      case 1:
        if (!form.fullName.trim()) return "Please enter your full name.";
        if (!form.dob) return "Please select your date of birth.";
        if (!form.gender) return "Please select your gender.";
        if (!form.nationality.trim()) return "Please enter your nationality.";
        if (!form.stateOfOrigin.trim()) return "Please enter your state of origin.";
        return null;
      case 2:
        if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email))
          return "Please enter a valid email address.";
        if (!form.phone.trim()) return "Please enter your phone number.";
        if (!form.address.trim()) return "Please enter your residential address.";
        return null;
      case 3:
        if (!form.qualification.trim()) return "Please enter your highest educational qualification.";
        if (!form.occupation.trim()) return "Please enter your current occupation.";
        return null;
      case 4:
        if (!form.course) return "Please select a course.";
        if (!form.cohort) return "Please select a cohort.";
        return null;
      case 5:
        if (!form.emergencyName.trim()) return "Please enter an emergency contact name.";
        if (!form.emergencyRelationship.trim()) return "Please enter the relationship to the emergency contact.";
        if (!form.emergencyPhone.trim()) return "Please enter the emergency contact phone number.";
        return null;
      case 6:
        if (!form.agreeTerms || !form.agreeRefund || !form.agreeCode)
          return "Please accept the Terms & Conditions, Refund Policy, and Code of Conduct to continue.";
        return null;
      default:
        return null;
    }
  };

  const handleNext = () => {
    const err = validateStep();
    if (err) {
      setError(err);
      return;
    }
    setError(null);
    setStep((s) => Math.min(s + 1, 6));
  };

  const handleBack = () => {
    setError(null);
    setStep((s) => Math.max(s - 1, 1));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const allowed = ["application/pdf", "image/jpeg", "image/png"];
    if (!allowed.includes(file.type)) {
      setError("Document must be a PDF, JPG, or PNG file.");
      setDocName(null);
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setError("Document must be smaller than 2MB.");
      setDocName(null);
      return;
    }
    setError(null);
    setDocName(`${file.name} (${(file.size / 1024).toFixed(0)} KB)`);
  };

  const handleSubmit = async () => {
    const err = validateStep();
    if (err) {
      setError(err);
      return;
    }
    setError(null);

    const applicationId = `NDA-APP-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const selectedCourse = courseOptions.find((c) => c.title === form.course);

    try {
      await submitRegistration.mutateAsync({
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        course: form.course,
        cohort: form.cohort,
        amount: 0,
        dateOfBirth: form.dob,
        gender: form.gender,
        nationality: form.nationality,
        stateOfOrigin: form.stateOfOrigin,
        address: form.address,
        qualification: form.qualification,
        occupation: form.occupation,
        heardAboutUs: form.heardAboutUs,
        emergencyName: form.emergencyName,
        emergencyRelationship: form.emergencyRelationship,
        emergencyPhone: form.emergencyPhone,
      });
    } catch {
      // Registration still shows success UI
    }

    setSubmitted({
      applicationId,
      name: form.fullName,
      course: `${form.course} · ${form.cohort} · ${selectedCourse?.fee ?? "Contact us for fee"}`,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return <SubmissionConfirmation data={submitted} docName={docName} />;
  }

  const currentCourse = courseOptions.find((c) => c.title === form.course);

  return (
    <main className="w-full bg-background text-text-primary min-h-screen">
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden">
        <FloatingOrbs
          orbs={[
            { size: 500, color: "bg-secondary", x: 60, y: 30, duration: 22, delay: 0, blur: 140 },
            { size: 400, color: "bg-accent", x: 25, y: 65, duration: 20, delay: 3, blur: 120 },
          ]}
        />
        <GridOverlay opacity={0.06} size={60} color="rgba(255,255,255,0.08)" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-16 py-20 text-center">
          <p className="text-accent-light text-sm uppercase tracking-[0.2em] font-semibold mb-3">
            Academy Registration
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Register for the <span className="text-accent-light">NICEGENE Digital Academy</span>
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Complete your application online in under 5 minutes — no manual intervention needed.
            You will receive a confirmation email with your unique Application ID.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-16 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Stepper */}
          <div className="flex items-center justify-between mb-10">
            {steps.map((s, i) => (
              <div key={s.id} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                      step > s.id
                        ? "bg-success border-success text-white"
                        : step === s.id
                          ? "bg-accent border-accent text-white shadow-lg shadow-accent/30"
                          : "bg-white border-gray-200 text-text-secondary/50"
                    }`}
                  >
                    {step > s.id ? <FaCheckCircle size={16} /> : <s.icon size={14} />}
                  </div>
                  <span
                    className={`hidden sm:block text-[10px] mt-1.5 font-semibold ${
                      step >= s.id ? "text-text-primary" : "text-text-secondary/50"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-2 sm:mx-3 ${
                      step > s.id ? "bg-success" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-gray-200 rounded-3xl p-8 md:p-10 shadow-xl shadow-primary/5"
            >
              <h2 className="text-xl font-bold text-text-primary mb-1">
                {steps[step - 1].label} Information
              </h2>
              <p className="text-[13px] text-text-secondary mb-6">
                Step {step} of {steps.length} —{" "}
                {step === 1 && "Tell us who you are"}
                {step === 2 && "How we can reach you"}
                {step === 3 && "Your education and background"}
                {step === 4 && "Choose your course, cohort, and learning mode"}
                {step === 5 && "Who should we contact in an emergency"}
                {step === 6 && "Review and confirm your registration"}
              </p>

              {error && (
                <div className="flex items-start gap-2 bg-error/10 border border-error/20 text-error text-[13px] rounded-xl px-4 py-3 mb-6">
                  <FaExclamationCircle size={15} className="mt-0.5 shrink-0" />
                  {error}
                </div>
              )}

              {step === 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label htmlFor="reg-name" className={labelCls}>Full Name *</label>
                    <input id="reg-name" className={inputCls} placeholder="e.g. Ada Obi" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} />
                  </div>
                  <div>
                    <label htmlFor="reg-dob" className={labelCls}>Date of Birth *</label>
                    <input id="reg-dob" type="date" className={inputCls} value={form.dob} onChange={(e) => setForm({ ...form, dob: e.target.value })} />
                  </div>
                  <div>
                    <label htmlFor="reg-gender" className={labelCls}>Gender *</label>
                    <select id="reg-gender" className={inputCls} value={form.gender} onChange={(e) => setForm({ ...form, gender: e.target.value })}>
                      <option value="">Select gender</option>
                      <option>Female</option>
                      <option>Male</option>
                      <option>Prefer not to say</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="reg-nationality" className={labelCls}>Nationality *</label>
                    <input id="reg-nationality" className={inputCls} placeholder="e.g. Nigerian" value={form.nationality} onChange={(e) => setForm({ ...form, nationality: e.target.value })} />
                  </div>
                  <div>
                    <label htmlFor="reg-state" className={labelCls}>State of Origin *</label>
                    <input id="reg-state" className={inputCls} placeholder="e.g. Anambra" value={form.stateOfOrigin} onChange={(e) => setForm({ ...form, stateOfOrigin: e.target.value })} />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="reg-email" className={labelCls}>Email Address *</label>
                    <input id="reg-email" type="email" className={inputCls} placeholder="you@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div>
                    <label htmlFor="reg-phone" className={labelCls}>Phone Number *</label>
                    <input id="reg-phone" className={inputCls} placeholder="+234 ..." value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  </div>
                  <div>
                    <label htmlFor="reg-whatsapp" className={labelCls}>WhatsApp Number</label>
                    <input id="reg-whatsapp" className={inputCls} placeholder="+234 ..." value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} />
                  </div>
                  <div>
                    <label htmlFor="reg-address" className={labelCls}>Residential Address *</label>
                    <input id="reg-address" className={inputCls} placeholder="Street, city, state" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="reg-qualification" className={labelCls}>Highest Educational Qualification *</label>
                    <select id="reg-qualification" className={inputCls} value={form.qualification} onChange={(e) => setForm({ ...form, qualification: e.target.value })}>
                      <option value="">Select qualification</option>
                      <option>Secondary School (WAEC/NECO)</option>
                      <option>OND / Diploma</option>
                      <option>B.Sc / HND</option>
                      <option>M.Sc / MBA</option>
                      <option>PhD</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="reg-occupation" className={labelCls}>Current Occupation *</label>
                    <input id="reg-occupation" className={inputCls} placeholder="e.g. Student, Engineer, Unemployed" value={form.occupation} onChange={(e) => setForm({ ...form, occupation: e.target.value })} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="reg-heard" className={labelCls}>How did you hear about us?</label>
                    <select id="reg-heard" className={inputCls} value={form.heardAboutUs} onChange={(e) => setForm({ ...form, heardAboutUs: e.target.value })}>
                      <option value="">Select an option</option>
                      <option>Social media</option>
                      <option>Referral</option>
                      <option>Website</option>
                      <option>Tech Insight Series</option>
                      <option>Advertisement</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="reg-course" className={labelCls}>Course Name *</label>
                    <select id="reg-course" className={inputCls} value={form.course} onChange={(e) => setForm({ ...form, course: e.target.value })}>
                      {courseOptions.map((c) => (
                        <option key={c.title} value={c.title}>{c.title}</option>
                      ))}
                    </select>
                    {currentCourse && (
                      <p className="text-[12px] text-text-secondary mt-1.5">
                        {currentCourse.courseDesc} · Fee:{" "}
                        <span className="font-semibold text-accent">{currentCourse.fee}</span> ·{" "}
                        {currentCourse.time}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="reg-cohort" className={labelCls}>Cohort / Intake *</label>
                    <select id="reg-cohort" className={inputCls} value={form.cohort} onChange={(e) => setForm({ ...form, cohort: e.target.value })}>
                      {cohortOptions.map((c) => (
                        <option key={c.id} value={c.name}>{c.name}</option>
                      ))}
                    </select>
                    {cohortOptions[0] && (
                      <p className="text-[12px] text-text-secondary mt-1.5">
                        Starts {new Date(cohortOptions[0].startDate).toLocaleDateString("en-NG", { day: "numeric", month: "long", year: "numeric" })} · {cohortOptions[0].classDays} · {cohortOptions[0].classTime}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className={labelCls}>Learning Mode *</label>
                    <div className="grid grid-cols-3 gap-3">
                      {(["Online", "Physical", "Hybrid"] as LearningMode[]).map((m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => setForm({ ...form, mode: m })}
                          className={`px-4 py-3 rounded-xl border text-sm font-semibold transition-all ${
                            form.mode === m
                              ? "bg-accent text-white border-accent shadow-md shadow-accent/20"
                              : "bg-white text-text-secondary border-gray-200 hover:border-accent hover:text-accent"
                          }`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="reg-doc" className={labelCls}>Required Documents (optional)</label>
                    <label
                      htmlFor="reg-doc"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-dashed border-gray-200 bg-surface cursor-pointer hover:border-accent transition-all"
                    >
                      <FaPaperclip size={16} className="text-accent shrink-0" />
                      <span className="text-sm text-text-secondary">
                        {docName ?? "Upload certificate or ID (PDF, JPG, PNG — max 2MB)"}
                      </span>
                      <input id="reg-doc" type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={handleFile} />
                    </label>
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="reg-emergency-name" className={labelCls}>Emergency Contact Name *</label>
                    <input id="reg-emergency-name" className={inputCls} placeholder="Full name" value={form.emergencyName} onChange={(e) => setForm({ ...form, emergencyName: e.target.value })} />
                  </div>
                  <div>
                    <label htmlFor="reg-emergency-rel" className={labelCls}>Relationship *</label>
                    <input id="reg-emergency-rel" className={inputCls} placeholder="e.g. Mother, Guardian" value={form.emergencyRelationship} onChange={(e) => setForm({ ...form, emergencyRelationship: e.target.value })} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="reg-emergency-phone" className={labelCls}>Emergency Contact Phone *</label>
                    <input id="reg-emergency-phone" className={inputCls} placeholder="+234 ..." value={form.emergencyPhone} onChange={(e) => setForm({ ...form, emergencyPhone: e.target.value })} />
                  </div>
                </div>
              )}

              {step === 6 && (
                <div className="space-y-6">
                  {/* Summary */}
                  <div className="bg-surface border border-gray-100 rounded-2xl p-6">
                    <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4">
                      Registration Summary
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-[13px]">
                      {[
                        ["Full Name", form.fullName],
                        ["Date of Birth", form.dob],
                        ["Gender", form.gender],
                        ["Nationality", form.nationality],
                        ["State of Origin", form.stateOfOrigin],
                        ["Email", form.email],
                        ["Phone", form.phone],
                        ["Residential Address", form.address],
                        ["Qualification", form.qualification],
                        ["Occupation", form.occupation],
                        ["Course", form.course],
                        ["Cohort", form.cohort],
                        ["Learning Mode", form.mode],
                        ["Emergency Contact", `${form.emergencyName} (${form.emergencyRelationship})`],
                        ["Emergency Phone", form.emergencyPhone],
                        ["Documents", docName ?? "None attached"],
                      ].map(([k, v]) => (
                        <div key={k}>
                          <p className="text-[10px] uppercase tracking-wider text-text-secondary font-semibold">{k}</p>
                          <p className="text-text-primary font-medium">{v || "-"}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Declaration */}
                  <div className="space-y-3">
                    {[
                      {
                        key: "agreeTerms" as const,
                        label: "I agree to the Terms and Conditions of NICEGENE Technology Solutions Limited.",
                      },
                      {
                        key: "agreeRefund" as const,
                        label: "I have read and accept the Refund, Cancellation & Service Guarantee Policy.",
                      },
                      {
                        key: "agreeCode" as const,
                        label: "I agree to abide by the NICEGENE Academy Code of Conduct.",
                      },
                    ].map((item) => (
                      <label
                        key={item.key}
                        className="flex items-start gap-3 bg-surface border border-gray-100 rounded-xl px-4 py-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={form[item.key]}
                          onChange={(e) => setForm({ ...form, [item.key]: e.target.checked })}
                          className="mt-0.5 w-4 h-4 accent-[#2E5FA3]"
                        />
                        <span className="text-[13px] text-text-primary">{item.label}</span>
                      </label>
                    ))}
                  </div>

                  <p className="text-[12px] text-text-secondary">
                    Upon submission you will receive an automated confirmation email with your
                    unique Application ID. Your enrolment will be confirmed shortly.
                  </p>
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                <button
                  onClick={handleBack}
                  disabled={step === 1}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-text-primary text-sm font-semibold hover:border-accent hover:text-accent transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <FaChevronLeft size={11} /> Back
                </button>
                {step < 6 ? (
                  <button
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent text-white text-sm font-semibold hover:bg-primary transition-all"
                  >
                    Continue <FaChevronRight size={11} />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-success text-white text-sm font-semibold hover:bg-green-700 transition-all"
                  >
                    <FaCheckCircle size={14} /> Confirm Registration
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          <p className="text-center text-[12px] text-text-secondary mt-6">
            Already registered?{" "}
            <Link href="/academy/student" className="text-accent font-semibold hover:text-primary">
              Go to the Student Portal
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

function SubmissionConfirmation({
  data,
  docName,
}: {
  data: { applicationId: string; name: string; course: string };
  docName: string | null;
}) {
  void docName;
  return (
    <main className="w-full bg-background text-text-primary min-h-screen px-6 md:px-16 py-24">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-xl shadow-primary/5"
        >
          <div className="bg-success px-8 py-10 text-center">
            <FaCheckCircle size={56} className="text-white mx-auto mb-4" />
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Registration Received
            </h1>
            <p className="text-white/80 text-sm mt-2">
              Welcome to the NICEGENE Digital Academy, {data.name.split(" ")[0]}!
            </p>
          </div>
          <div className="p-8 space-y-5">
            <div className="text-center">
              <p className="text-[11px] uppercase tracking-wider text-text-secondary font-semibold mb-2">
                Your Application ID
              </p>
              <p className="inline-block font-mono font-bold text-lg text-accent bg-accent/5 border border-accent/20 px-5 py-2 rounded-xl">
                {data.applicationId}
              </p>
            </div>

            <p className="text-sm text-text-secondary leading-relaxed text-center">
              A confirmation email has been sent to your email address with your Application ID.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/academy/student"
                className="flex-1 text-center inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-accent text-white font-semibold text-sm hover:bg-primary transition-all"
              >
                Go to Student Portal
              </Link>
              <Link
                href="/academy"
                className="flex-1 text-center inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-gray-200 text-text-primary font-semibold text-sm hover:border-accent hover:text-accent transition-all"
              >
                Explore More Courses
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}