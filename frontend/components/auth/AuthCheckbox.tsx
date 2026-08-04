"use client";

interface AuthCheckboxProps {
    id: string;
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;    
}

export default function AuthCheckbox({
    id,
    label,
    checked,
    onChange,
}: AuthCheckboxProps){
    return (
        <label
            htmlFor={id}
            className="flex items-center gap-2 cursos-pointer select-none"
        >
            <input 
                id={id}
                type="checkbox"
                checked={checked}
                onChange={(event) => onChange(event.target.checked)}
                className="
                    h-4
                    w-4
                    rounded
                    border-gray-300
                    text-blue-600
                    focus:ring-blue-500
                "
            />

            <span className="text-sm text-gray-600">
                {label}
            </span>
        </label>
    );
}