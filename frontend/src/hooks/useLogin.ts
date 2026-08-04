"use client";

import { useState } from "react";

import authService from "../services/auth.service";
import type {
  LoginRequest,
  LoginResponse,
} from "../types/auth";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function login(
    data: LoginRequest
  ): Promise<LoginResponse | null> {
    try {
      setLoading(true);
      setError("");

      const response = await authService.login(data);

      console.log("Token recebido:", response.token);

      return response;
    } catch (err) {
      console.error(err);

      setError("E-mail ou senha inválidos.");

      return null;
    } finally {
      setLoading(false);
    }
  }

  return {
    login,
    loading,
    error,
  };
}