// Esse componente será utilizado em Login, Cadastro, Recuperação de Senha, Alterar Senha.

interface FormErrorProps {
    message?: string;
}

export default function FormError({
    message,
}: FormErrorProps){

    if (!message) {
        return null;
    }

    return (
        <p className="mt-2 text-sm text-red-500">
            {message}
        </p>
    );
}