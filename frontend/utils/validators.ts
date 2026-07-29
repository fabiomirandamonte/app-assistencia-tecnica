import { LoginFormData, LoginFormErrors } from "@/types/auth";

export function validateLoginForm(
    data: LoginFormData
): LoginFormErrors {
    
    const errors: LoginFormErrors = {};

    if (!data.email.trim()){
        errors.email = "Informe seu email.";
    } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
    ) {
        errors.email = "E-mail inválido."
    }

    if (!data.password.trim()){
        errors.password = "Informe sua senha.";
    } 
    else if (data.password.length < 6) {
        errors.password = "A senha deve possuir no mínimo 6 caracteres.";
    }

    return errors;
}