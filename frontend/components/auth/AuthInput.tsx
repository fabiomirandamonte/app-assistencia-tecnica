"use client";

import type {
  InputHTMLAttributes,
  ReactNode,
} from "react";

import { Eye, EyeOff } from "lucide-react";

interface AuthInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: ReactNode;
  error?: string;
  isPassword?: boolean;
  showPassword?: boolean;
  onTogglePassword?: () => void;
}

export default function AuthInput({
  label,
  icon,
  error,
  isPassword = false,
  showPassword = false,
  onTogglePassword,
  type,
  id,
  name,
  className,
  ...rest
}: AuthInputProps) {
  const inputId = id ?? name;

  return (
    <div className="space-y-2">
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>

      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
          {icon}
        </span>

        <input
          {...rest}
          id={inputId}
          name={name}
          type={type}
          aria-invalid={Boolean(error)}
          aria-describedby={
            error && inputId
              ? `${inputId}-error`
              : undefined
          }
          className={`
            w-full rounded-xl border bg-white
            py-3 pl-10 pr-12
            text-gray-900
            outline-none transition
            placeholder:text-gray-400
            focus:border-blue-500
            focus:ring-2 focus:ring-blue-100
            ${
              error
                ? "border-red-500"
                : "border-gray-300"
            }
            ${className ?? ""}
          `}
        />

        {isPassword && onTogglePassword && (
          <button
            type="button"
            onClick={onTogglePassword}
            aria-label={
              showPassword
                ? "Ocultar senha"
                : "Mostrar senha"
            }
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        )}
      </div>

      {error && (
        <p
          id={
            inputId
              ? `${inputId}-error`
              : undefined
          }
          role="alert"
          className="text-sm text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  );
}