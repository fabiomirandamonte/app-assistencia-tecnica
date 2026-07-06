import { MonitorCog } from "lucide-react";

export default function LeftHeader() {
  return (
    <div>
      <div className="flex items-center gap-4">

        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-blue-600/20
            backdrop-blur-sm
          "
        >
          <MonitorCog
            size={34}
            className="text-blue-400"
          />
        </div>

        <div>

          <h1 className="text-4xl font-bold leading-none text-white">
            Assistência
          </h1>

          <h2 className="text-4xl font-bold leading-none text-blue-400">
            Técnica
          </h2>

        </div>

      </div>
      
      <div
        className="
          mt-10
          inline-flex
          rounded-full
          bg-blue-600/20
          px-5
          py-2
          text-sm
          font-medium
          text-blue-300
          backdrop-blur-sm
        "
      >
        Sistema de Gestão Completo
      </div>

    </div>
  );
}