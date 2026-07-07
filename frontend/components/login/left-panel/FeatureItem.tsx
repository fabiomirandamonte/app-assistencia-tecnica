interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureItem({
  icon,
  title,
  description,
}: FeatureItemProps) {
  return (
    <div
      className="
        flex
        items-start
        gap-4
        rounded-2xl
        bg-white/10
        p-5
        backdrop-blur-sm
        transition-all
        hover:bg-white/15
      "
    >
      <div className="text-blue-400">
        {icon}
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>

        <p className="mt-1 text-sm text-blue-100">
          {description}
        </p>
      </div>
    </div>
  );
}