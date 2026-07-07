"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface InputFieldProps {
    label: string;
    placeholder: string;
    type?: "text" | "email" | "password"
    icon: React.ReactNode
}

export default function InputField({
    label,
    placeholder,
    type = "text",
    icon,
}: InputFieldProps) {
    const [showPassword, setShowPassword] = useState(false);
    
    const isPassword = type === "password";

    return (
        <div className="mt-6">
            <label className="mb-2 block text-sm font-medium text-gray-900">
                {label}
            </label>

            <div className="flex items-center rounded-xl border border-gray-300 px-4 py-4  transition focus-within:border-blue-600">
                <span className="mr-3 text-gray-400">{icon}</span>

                <input 
                    type={isPassword ? (showPassword ? "text" : "password") : type}
                    placeholder={placeholder}
                    className="flex-1
                    bg-transparent
                    text-gray-900
                    placeholder:text-gray-500
                    outline-none
                    "
                />
                        
                {isPassword && (
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? (
                    <EyeOff size={20} className="text-gray-400" />
                    ) : (
                    <Eye size={20} className="text-gray-400" />
                    )}
                </button>
                )}
            </div>    
        </div>
    );
}