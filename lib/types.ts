// ─── Auth ────────────────────────────────────────────────────────────────────

export type AuthUser = {
  _id: string;
  name: string;
  email: string;
  role: string;
  token: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  name: string;
  email: string;
  password: string;
};

// ─── Students ────────────────────────────────────────────────────────────────

export type StudentStatus = "active" | "completed" | "dropped";

export type Student = {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  course: string;
  cohort?: string;
  status: StudentStatus;
  grades?: string;
  dateOfBirth?: string;
  gender?: string;
  nationality?: string;
  stateOfOrigin?: string;
  address?: string;
  qualification?: string;
  occupation?: string;
  heardAboutUs?: string;
  emergencyName?: string;
  emergencyRelationship?: string;
  emergencyPhone?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateStudentPayload = Partial<
  Pick<Student, "fullName" | "phone" | "course" | "status" | "grades"> & {
    whatsapp?: string;
    address?: string;
  }
>;

// ─── Staff ───────────────────────────────────────────────────────────────────

export type StaffCategory = "executive" | "staff";

export type Staff = {
  _id: string;
  name: string;
  email: string;
  dateOfBirth?: string;
  role: string;
  department: string;
  category: StaffCategory;
  image?: string;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type CreateStaffPayload = {
  name: string;
  email: string;
  dateOfBirth: string;
  role: string;
  department: string;
  category?: StaffCategory;
  image?: File;
  isActive?: boolean;
};

export type UpdateStaffPayload = Partial<
  Pick<Staff, "name" | "email" | "dateOfBirth" | "role" | "department" | "category" | "isActive">
> & { image?: File };

// ─── Registrations ───────────────────────────────────────────────────────────

export type RegistrationPayload = {
  fullName: string;
  email: string;
  phone: string;
  course: string;
  cohort: string;
  amount: number;
  dateOfBirth?: string;
  gender?: string;
  nationality?: string;
  stateOfOrigin?: string;
  address?: string;
  qualification?: string;
  occupation?: string;
  heardAboutUs?: string;
  emergencyName?: string;
  emergencyRelationship?: string;
  emergencyPhone?: string;
};

export type Registration = Student & {
  amount?: number;
  reviewed?: boolean;
};

// ─── Referrals ───────────────────────────────────────────────────────────────

export type ReferralStatus =
  | "Submitted"
  | "Contacted"
  | "Proposal Sent"
  | "Converted"
  | "Commission Due";

export const REFERRAL_FLOW: ReferralStatus[] = [
  "Submitted",
  "Contacted",
  "Proposal Sent",
  "Converted",
  "Commission Due",
];

export type ReferralStatusHistory = {
  status: ReferralStatus;
  date: string;
  note: string;
};

export type Referral = {
  _id: string;
  trackingId: string;
  referrerName: string;
  referrerContact: string;
  relationship?: string;
  refereeName: string;
  refereeContact: string;
  refereeCompany?: string;
  service: string;
  status: ReferralStatus;
  dateSubmitted: string;
  statusHistory: ReferralStatusHistory[];
  commission: number;
  createdAt?: string;
  updatedAt?: string;
};

export type ReferralPayload = {
  referrerName: string;
  referrerContact: string;
  relationship?: string;
  refereeName: string;
  refereeContact: string;
  refereeCompany?: string;
  service: string;
};

// ─── Projects ────────────────────────────────────────────────────────────────

export type Project = {
  _id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags?: string[];
  liveUrl?: string;
  status?: string;
  client?: string;
  year?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type ProjectPayload = {
  title: string;
  description: string;
  image?: File;
  category: string;
  tags?: string[];
  liveUrl?: string;
  status?: string;
  client?: string;
  year?: string;
};

// ─── Graduates ───────────────────────────────────────────────────────────────

export type Graduate = {
  _id: string;
  name: string;
  course: string;
  graduationYear: number;
  grade?: string;
  image: string;
  testimonial?: string;
  linkedInUrl?: string;
  createdAt?: string;
  updatedAt?: string;
};

// ─── Exams ───────────────────────────────────────────────────────────────────

export type QuestionType = "single" | "multiple" | "truefalse" | "short";

export type ExamQuestion = {
  id: string;
  type: QuestionType;
  prompt: string;
  options?: string[];
  answer?: string | string[];
  sampleAnswer?: string;
  marks: number;
};

export type Exam = {
  _id: string;
  course: string;
  title: string;
  durationMinutes: number;
  questions: ExamQuestion[];
  passMark: number;
  instructions: string[];
  createdAt?: string;
  updatedAt?: string;
};

export type ExamSubmissionPayload = {
  examId: string;
  answers: Record<string, string | string[]>;
};

export type ExamResult = {
  score: number;
  total: number;
  passed: boolean;
  graded: { questionId: string; correct: boolean; obtained: number }[];
};

// ─── Events ──────────────────────────────────────────────────────────────────

export type EventType = "birthday" | "activity" | "company-event";

export type EventItem = {
  _id: string;
  type: EventType;
  title: string;
  date: string;
  description: string;
  images?: string[];
  createdAt?: string;
  updatedAt?: string;
};

// ─── Courses ─────────────────────────────────────────────────────────────────

export type CoursePricing = {
  _id: string;
  title: string;
  desc?: string;
  track?: string;
  fee?: string;
  time?: string;
  status?: string;
  courseDesc?: string;
};

// ─── Contact ─────────────────────────────────────────────────────────────────

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  organisation?: string;
  phone?: string;
  service?: string;
  consent: boolean;
};

export type ContactSubmission = {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  organisation?: string;
  phone?: string;
  service?: string;
  consent: boolean;
  read?: boolean;
  createdAt?: string;
};

// ─── Certificates ────────────────────────────────────────────────────────────

export type CertificateStatus = "valid" | "revoked";

export type Certificate = {
  _id: string;
  studentName: string;
  course: string;
  completionDate: string;
  grade?: string;
  gradeConsented?: boolean;
  status: CertificateStatus;
  createdAt?: string;
};

export type CertificatePayload = {
  studentName: string;
  email: string;
  course: string;
  completionDate: string;
  grade?: string;
  gradeConsented?: boolean;
};

// ─── Blogs ───────────────────────────────────────────────────────────────────

export type BlogPost = {
  _id: string;
  title: string;
  content: string;
  image: string;
  author: string;
  tags?: string[];
  date: string;
  createdAt?: string;
  updatedAt?: string;
};

export type BlogPayload = {
  title: string;
  content: string;
  image?: File;
  author: string;
  tags?: string[];
};

// ─── Testimonials ────────────────────────────────────────────────────────────

export type TestimonialPayload = {
  name: string;
  email: string;
  organization?: string;
  position?: string;
  rating: number;
  service: string;
  text: string;
  photo?: string;
  consent: boolean;
};
