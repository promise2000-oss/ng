"use client";

import { FaTimes, FaMicrochip, FaMemory, FaDatabase, FaDesktop, FaCamera, FaBatteryFull, FaMobileAlt } from "react-icons/fa";
import Modal from "@/components/Modal";

export type Specs = {
  processor?: string;
  ram?: string;
  storage?: string;
  display?: string;
  camera?: string;
  battery?: string;
  os?: string;
  graphics?: string;
};

type SpecItem = {
  label: string;
  value: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

const MODAL_TITLE_ID = "specs-modal-title";

export default function SpecsModal({
  product,
  onClose,
  salesPhone,
}: {
  product: { name: string; specs: Specs } | null;
  onClose: () => void;
  salesPhone?: string;
}) {
  if (!product) return null;

  const iconMap: Record<keyof Specs, React.ComponentType<{ size?: number; className?: string }>> = {
    processor: FaMicrochip,
    ram: FaMemory,
    storage: FaDatabase,
    display: FaDesktop,
    camera: FaCamera,
    battery: FaBatteryFull,
    os: FaMicrochip,
    graphics: FaMicrochip,
  };

  const specEntries = Object.entries(product.specs).filter(
    ([, v]) => v
  ) as [keyof Specs, string][];

  const items: SpecItem[] = specEntries.map(([key, value]) => ({
    label: key.charAt(0).toUpperCase() + key.slice(1),
    value,
    icon: iconMap[key] || FaMicrochip,
  }));

  return (
    <Modal open={Boolean(product)} onClose={onClose} labelledBy={MODAL_TITLE_ID} panelClassName="w-full max-w-md">
      <button
        onClick={onClose}
        aria-label="Close specifications"
        className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-surface flex items-center justify-center text-text-primary hover:bg-surface transition-all outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <FaTimes size={14} />
      </button>

      <h3 id={MODAL_TITLE_ID} className="text-lg font-semibold text-text-primary pr-8 mb-5 pt-6 px-6">
        {product.name}
      </h3>

      <div className="px-6 pb-6">
        {salesPhone ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
              <FaMobileAlt size={28} className="text-accent" />
            </div>
            <p className="text-text-primary/80 text-sm">
              Contact our Sales Team for pricing and specifications on this product.
            </p>
            <a
              href={`tel:${salesPhone}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold text-sm hover:bg-accent/90 transition-all"
            >
              <FaMobileAlt size={14} />
              {salesPhone}
            </a>
            <p className="text-text-primary/70 text-xs">
              Or send us a message — we are happy to help.
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {items.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 bg-surface border border-gray-100 rounded-xl px-4 py-3"
              >
                <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center text-primary shrink-0">
                  <item.icon size={16} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wider text-text-primary/70">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-text-primary truncate">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Modal>
  );
}