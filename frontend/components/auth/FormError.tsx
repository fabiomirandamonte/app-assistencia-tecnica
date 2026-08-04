interface FormErrorProps {
  message?: string;
}

export default function FormError({
  message,
}: FormErrorProps) {
  if (!message) return null;

  return (
    <p
      className="mt-2 text-sm font-medium text-red-500"
      role="alert"
    >
      {message}
    </p>
  );
}