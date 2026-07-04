import { Moon, Globe } from "lucide-react";

export default function TopActions() {
  return (
    <div className="absolute right-12 top-10 flex gap-3">
      <button
        className="flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border
          border-gray-300
          transition
          hover:bg-gray-100"
          aria-label="Toggle dark mode
        "
      >
        <Moon size={18} />
      </button>

      <button
        className="
          flex
          items-center
          gap-2
          rounded-xl
          border
          border-gray-300
          px-4
          py-3
          transition
          hover:bg-gray-100
        "
        aria-label="Change language"
      >
        <Globe size={18} />
        Português
      </button>
    </div>
  );
}