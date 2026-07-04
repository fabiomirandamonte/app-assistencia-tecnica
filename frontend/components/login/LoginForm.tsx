import LoginButton from "./LoginButton";

export default function LoginForm() {
  return (
    <>
      {/* Email */}
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

      {/* Senha */}
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

      <div className="mt-3 flex justify-end">
        <button className="text-sm text-blue-600 hover:underline">
          Esqueci minha senha
        </button>
      </div>

      <LoginButton />
    </>
  );
}