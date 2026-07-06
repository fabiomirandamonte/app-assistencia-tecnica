import { Globe, Laptop } from "lucide-react";

export default function SocialLogin() {
  return (
    <div className="grid grid-cols-2 gap-4">

      <button
        className="
          flex
          items-center
          justify-center
          gap-3
          rounded-xl
          border
          border-gray-300
          py-3
          font-medium
          text-gray-700
          transition-all
          duration-200
          hover:bg-gray-50
          hover:shadow-md
        "
      >
        <Globe size={20} />

        Google
      </button>

      <button
        className="
          flex
          items-center
          justify-center
          gap-3
          rounded-xl
          border
          border-gray-300
          py-3
          font-medium
          text-gray-700
          transition-all
          duration-200
          hover:bg-gray-50
          hover:shadow-md
        "
      >
        <Laptop size={20} />

        Microsoft
      </button>

    </div>
  );
}