import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  className?: string;
}

export function StarRating({ rating, reviewCount, className }: StarRatingProps) {
  return (
    <div className={cn("flex items-center gap-1", className)} aria-label={`Rating ${rating} dari 5`}>
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={cn(
              "h-3.5 w-3.5",
              index < Math.round(rating) ? "fill-primary text-primary" : "fill-transparent text-border"
            )}
          />
        ))}
      </div>
      {reviewCount !== undefined && (
        <span className="text-xs text-muted">({reviewCount})</span>
      )}
    </div>
  );
}
