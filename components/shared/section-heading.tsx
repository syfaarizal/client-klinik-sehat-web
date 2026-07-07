import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({ title, description, align = "center", className }: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <h2 className="text-2xl font-bold text-secondary sm:text-3xl">{title}</h2>
      {description && <p className="max-w-xl text-sm text-muted sm:text-base">{description}</p>}
    </div>
  );
}
