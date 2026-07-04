import LoginForm from "./LoginForm";

export default function LoginCard() {
  return (
    <div className="w-full max-w-xl">

      <h1 className="text-5xl font-bold text-slate-900">
        Bem-vindo!
      </h1>

      <p className="mt-4 text-lg text-gray-500">
        Faça login para acessar sua conta.
      </p>

      <LoginForm />

    </div>
  );
}