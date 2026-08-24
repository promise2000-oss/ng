import { FaGraduationCap, FaBookOpen, FaClock, FaCheck, FaUsers } from "react-icons/fa";

const benefits = [
  { icon: FaBookOpen, text: "Access to video recordings even after training" },
  { icon: FaClock, text: "Flexible payment in two installments" },
  { icon: FaCheck, text: "Industry-recognized certification" },
  { icon: FaUsers, text: "Learn from industry experts" },
];

export default function WhyJoinAcademy() {
  return (
    <div className="bg-gradient-to-br from-secondary/5 to-purple-500/5 border border-gray-200 rounded-2xl p-6">
      <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
        <FaGraduationCap className="text-primary" size={16} />
        Why Join Our Academy?
      </h3>
      <div className="space-y-3">
        {benefits.map((item, i) => (
          <div key={i} className="flex items-center gap-3 text-sm text-text-primary">
            <item.icon className="text-primary shrink-0" size={14} />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
