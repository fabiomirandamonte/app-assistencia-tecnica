"use client";

import { Mail, Lock } from "lucide-react";

import InputField from "./InputField";
import LoginButton from "./LoginButton";

export default function LoginForm() {
  return (
    <>
      <InputField
        label="E-mail ou CPF"
        placeholder="Digite seu e-mail"
        text-gray-600
        icon={<Mail size={20} />}
      />

      <InputField
        label="Senha"
        placeholder="Digite sua senha"
        type="password"
        icon={<Lock size={20} />}
      />

      <div className="mt-5 flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input type="checkbox" />
          Lembrar de mim
        </label>

        <button className="text-sm font-medium text-blue-600 hover:underline">
          Esqueci minha senha
        </button>
      </div>

      <LoginButton />
    </>
  );
}