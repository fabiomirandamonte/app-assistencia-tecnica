import Image from "next/image";
import { Moon, Globe } from "lucide-react";

export default function Home() {
  return (
    <main className="flex h-screen w-screen overflow-hidden">
      {/* =========================
          PAINEL ESQUERDO
      ========================== */}
      <section className="relative w-[55%]">
        <Image
          src="/images/fundo02.png"
          alt="Background"
          fill
          priority
          className="object-cover object-right"
        />

        <div className="absolute inset-0 bg-blue-950/70" />
      </section>

      {/* =========================
          PAINEL DIREITO
      ========================== */}
      <section className="relative flex w-[45%] bg-white">

        {/* Botões superiores */}
        <div className="absolute right-12 top-10 flex gap-3">

          <button
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-gray-300
              transition
              hover:bg-gray-100
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
          >
            <Globe size={18} />
            Português
          </button>

        </div>

        {/* Conteúdo */}
        <div className="flex w-full items-center justify-center px-20">

          <div className="w-full max-w-xl">

            <h1 className="text-5xl font-bold text-slate-900">
              Bem-vindo!
            </h1>

            <p className="mt-4 text-lg text-gray-500">
              Faça login para acessar sua conta.
            </p>

            {/* EMAIL */}

            <div className="mt-10">

              <label className="mb-2 block text-sm font-medium text-gray-700">
                E-mail ou CPF
              </label>

              <input
                type="text"
                placeholder="Digite seu e-mail"
                className="
                  w-full
                  rounded-xl
                  border
                  border-gray-300
                  px-4
                  py-4
                  outline-none
                  transition
                  focus:border-blue-600
                "
              />

            </div>

            {/* SENHA */}

            <div className="mt-6">

              <label className="mb-2 block text-sm font-medium text-gray-700">
                Senha
              </label>

              <input
                type="password"
                placeholder="Digite sua senha"
                className="
                  w-full
                  rounded-xl
                  border
                  border-gray-300
                  px-4
                  py-4
                  outline-none
                  transition
                  focus:border-blue-600
                "
              />

            </div>

            {/* ESQUECI SENHA */}

            <div className="mt-3 flex justify-end">

              <button className="text-sm text-blue-600 hover:underline">
                Esqueci minha senha
              </button>

            </div>

            {/* BOTÃO */}

            <button
              className="
                mt-8
                w-full
                rounded-xl
                bg-blue-600
                py-4
                text-lg
                font-semibold
                text-white
                transition
                hover:bg-blue-700
              "
            >
              Entrar
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}