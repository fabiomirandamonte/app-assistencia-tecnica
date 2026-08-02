"use client";

import { useState } from "react";
import { Mail, Lock } from "lucide-react";

import AuthInput from "./AuthInput";
import AuthCheckbox from "./AuthCheckbox";
import AuthButton from "./AuthButton";
import FormError from "./FormError";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [loading] = useState(false);
  const [error] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log({
      email,
      password,
      rememberMe,
    });

    // Aqui futuramente será feita a chamada da API
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <AuthInput
        label="E-mail ou CPF"
        type="email"
        placeholder="Digite seu e-mail"
        icon={<Mail size={20} />}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <AuthInput
        label="Senha"
        type={showPassword ? "text" : "password"}
        placeholder="Digite sua senha"
        icon={<Lock size={20} />}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        showPassword={showPassword}
        onTogglePassword={() =>
          setShowPassword(!showPassword)
        }
      />

      <div className="flex items-center justify-between">

        <AuthCheckbox
          id="remember"
          label="Lembrar de mim"
          checked={rememberMe}
          onChange={setRememberMe}
        />

        <button
          type="button"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          Esqueci minha senha
        </button>

      </div>

      <FormError message={error} />

      <AuthButton loading={loading}>
        Entrar
      </AuthButton>

    </form>
  );
}