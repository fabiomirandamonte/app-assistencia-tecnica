import { ArrowRight } from "lucide-react";

export default function LoginButton() {
  return (
    <button
      className="
        mt-8
        flex
        w-full
        items-center
        justify-center
        gap-2
        rounded-xl
        bg-gradient-to-r
        bg-blue-600
        py-4
        text-lg
        font-semibold
        text-white
        transition-all
        duration-200
        hover:scale-[1.02]
        hover:shadow-x1
      "
    >
      Entrar
      <ArrowRight size={20} />
    </button>
  );
}