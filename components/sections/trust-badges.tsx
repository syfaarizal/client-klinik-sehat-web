import { ShieldCheck, Award, HeartPulse, Clock, Phone, type LucideIcon } from "lucide-react";
import { trustBadges } from "@/data/features";

const iconMap: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  "badge-check": Award,
  "heart-pulse": HeartPulse,
  clock: Clock,
  phone: Phone,
};

export function TrustBadges() {
  return (
    <section className="border-y border-border bg-white py-8" aria-label="Keunggulan klinik">
      <div className="container-app grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {trustBadges.map((badge) => {
          const Icon = iconMap[badge.icon] ?? ShieldCheck;
          return (
            <div key={badge.id} className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-secondary">{badge.title}</p>
                <p className="text-xs text-muted">{badge.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
