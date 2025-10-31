import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  features: string[];
  reverse?: boolean;
}

export default function ProductCard({
  image,
  title,
  description,
  features,
  reverse = false,
}: ProductCardProps) {
  return (
    <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className={reverse ? 'md:order-2' : ''}>
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-xl"
          data-testid={`img-product-${title.toLowerCase().replace(/\s/g, '-')}`}
        />
      </div>
      <div className={reverse ? 'md:order-1' : ''}>
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">{title}</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <p className="text-foreground">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
