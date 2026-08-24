import { FaSearch } from "react-icons/fa";

type EmptyStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
};

export default function EmptyState({ title, description, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6 bg-white border border-gray-200 rounded-3xl">
      <div className="w-14 h-14 rounded-full bg-surface flex items-center justify-center mb-5">
        <FaSearch size={18} className="text-text-secondary/50" />
      </div>
      <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
      <p className="text-sm text-text-secondary mt-2 max-w-sm leading-relaxed">{description}</p>
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="mt-6 px-6 py-2.5 rounded-full bg-accent text-white font-semibold text-[13px] hover:bg-primary transition-all active:scale-[0.97] outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}