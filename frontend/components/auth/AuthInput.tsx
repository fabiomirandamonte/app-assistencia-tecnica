"use client";

import { InputHTMLAttributes, ReactNode } from "react";
import { Eye, EyeOff } from "lucide-react";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: ReactNode;
  error?: string;
  showPassword?: boolean;
  onTogglePassword?: () => void;
}

export default function AuthInput({
  label,
  icon,
  error,
  showPassword,
  onTogglePassword,
  type,
  ...rest
}: AuthInputProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <div
        className={`flex items-center rounded-xl border px-4 py-3 transition-colors
        ${
          error
            ? "border-red-500"
            : "border-gray-300 focus-within:border-blue-600"
        }`}
      >
        <span className="mr-3 text-gray-400">
          {icon}
        </span>

        <input
          type={type}
          className="flex-1 bg-transparent outline-none text-gray-800 placeholder:text-gray-400"
          {...rest}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="text-gray-400 hover:text-gray-700"
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        )}
      </div>

      {error && (
        <span className="text-sm text-red-500">
          {error}
        </span>
      )}
    </div>
  );
}