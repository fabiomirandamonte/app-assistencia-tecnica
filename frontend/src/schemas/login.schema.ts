import { z } from "zod";

export const loginSchema = z.object({
    email: z
        .string()
        .min(1, "O e-mail é obrigatório.")
        .email("Informe um e-mail válido."),
    
    password: z
        .string()
        .min(6, "A senha deve possuir no mínimo 6 caracteres."),

    rememberMe: z.boolean(),

});

export type LoginFormData = z.infer<typeof loginSchema>;