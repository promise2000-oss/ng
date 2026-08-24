type SkeletonProps = {
  rows?: number;
  cards?: number;
  cardClassName?: string;
};

export default function Skeleton({ rows = 4, cards = 6, cardClassName }: SkeletonProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" aria-hidden="true">
      {Array.from({ length: cards }).map((_, i) => (
        <div
          key={i}
          className={`bg-white border border-gray-200 rounded-2xl overflow-hidden ${
            cardClassName ?? ""
          }`}
        >
          <div className="h-40 bg-surface animate-pulse" />
          <div className="p-5 space-y-3">
            {Array.from({ length: rows }).map((_, j) => (
              <div
                key={j}
                className={`h-3 rounded-full bg-surface animate-pulse ${
                  j === rows - 1 ? "w-2/3" : "w-full"
                }`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}