"use client";

type MenuTabProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export default function MenuTab({ label, isActive, onClick }: MenuTabProps) {
  return (
    <button
      onClick={onClick}
      className={`px-2 py-1 sm:px-8 sm:py-3 rounded-full transition-all ${
        isActive
          ? "bg-[#1e3a8a] text-white"
          : "bg-[#e5e7eb] text-[#1e3a8a] hover:bg-[#d1d5db]"
      }`}
    >
      {label}
    </button>
  );
}