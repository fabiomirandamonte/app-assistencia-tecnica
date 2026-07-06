export default function CreateAccount() {
    return (
        <div className="mt-8 text-center">
            <p className="text-gray-500">
                Ainda não possui uma conta?
            </p>
            <button 
                className="
                    mt-3
                    rounded-x1
                    bg-gray-100
                    px-6
                    py-3
                    font-medium
                    text-blue-600
                    transition-all
                    duration-200
                    houver:bg-gray-200
                "
            >
                Criar nova conta
            </button>
        </div>
    );
}