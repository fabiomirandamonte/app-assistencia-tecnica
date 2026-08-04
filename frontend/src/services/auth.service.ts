import { api } from "@/src/lib/api";
import type {
  LoginRequest,
  LoginResponse,
} from "@/src/types/auth";

class AuthService {

  async login(
    data: LoginRequest
  ): Promise<LoginResponse> {

    console.log("Login enviado para API:", data);

    /*
     * Na próxima etapa este método fará:
     *
     * return api<LoginResponse>("/auth/login", {
     *   method: "POST",
     *   body: JSON.stringify(data),
     * });
     */

    return {
      token: "jwt-token-simulado",
      type: "Bearer",
    };
  }
}

export default new AuthService();