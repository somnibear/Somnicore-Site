import { Shield, Clock, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function TrustBadges() {
  const badges = [
    { icon: Shield, text: "LLC Registered" },
    { icon: Clock, text: "24/7 Support" },
    { icon: Award, text: "Clinically Validated" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-4 py-2"
          data-testid={`badge-trust-${badge.text.toLowerCase().replace(/\s/g, '-')}`}
        >
          <badge.icon className="w-5 h-5 text-primary" />
          <span className="font-medium text-sm">{badge.text}</span>
        </div>
      ))}
    </div>
  );
}
