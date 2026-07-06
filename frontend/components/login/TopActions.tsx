import { Moon, Globe } from "lucide-react";

export default function TopActions() {
  return (
    <div className="absolute top-10 right-12 flex items-center gap-3">

      <button
        aria-label="Alternar tema"
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border
          border-gray-200
          bg-white
          text-slate-700
          shadow-sm
          transition-all
          hover:bg-gray-100
          hover:shadow-md
        "
      >
        <Moon size={18} strokeWidth={2} />
      </button>

      <button
        aria-label="Alterar idioma"
        className="
          flex
          items-center
          gap-2
          rounded-xl
          border
          border-gray-200
          bg-white
          px-4
          py-3
          text-sm
          font-medium
          text-slate-700
          shadow-sm
          transition-all
          hover:bg-gray-100
          hover:shadow-md
        "
      >
        <Globe size={18} strokeWidth={2} />
        <span>Português</span>
      </button>

    </div>
  );
}