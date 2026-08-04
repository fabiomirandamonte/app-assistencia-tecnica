"use client";

import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthInput from "./AuthInput";
import AuthCheckbox from "./AuthCheckbox";
import AuthButton from "./AuthButton";
import FormError from "./FormError";

import { useLogin } from "@/src/hooks/useLogin";
import {
  loginSchema,
  type LoginFormData,
} from "@/src/schemas/login.schema";

export default function AuthForm() {
  // Estados locais
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Hook responsável pelo login
  const { login, loading, error } = useLogin();

  // React Hook Form + Zod
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  // Envio do formulário
  async function onSubmit(data: LoginFormData) {
    await login({
      email: data.email,
      password: data.password,
    });

    console.log("Lembrar de mim:", rememberMe);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      noValidate
    >
      <AuthInput
        label="E-mail ou CPF"
        type="email"
        placeholder="Digite seu e-mail"
        icon={<Mail size={20} />}
        error={errors.email?.message}
        {...register("email")}
      />

      <AuthInput
        label="Senha"
        type={showPassword ? "text" : "password"}
        placeholder="Digite sua senha"
        icon={<Lock size={20} />}
        error={errors.password?.message}
        showPassword={showPassword}
        onTogglePassword={() =>
          setShowPassword((current) => !current)
        }
        {...register("password")}
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