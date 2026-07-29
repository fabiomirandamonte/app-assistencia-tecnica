interface StatsItemProps {
    value: string;
    label: string;
}

export default function StatsItem({
    value,
    label,

}: StatsItemProps) {
    return (
        <div className = "flex flex-col">
            <span className="text-3xl font-bold text-blue-400">
                {value}
            </span>

            <span className="mt-1 text-sm text-blue-100">
                {label}
            </span>
        </div>
    );
} 