import ProductCard from "@/components/ProductCard";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import appImage from "@assets/generated_images/Sleep_tracker_app_interface_ad2f3cd3.png";
import deviceImage from "@assets/generated_images/Sleep_tracking_wearable_device_9e09a359.png";

export default function Products() {
  const appFeatures = [
    "Sleep cycle tracking and analysis",
    "Smart alarm with optimal wake time",
    "Detailed sleep quality metrics",
    "Personalized recommendations",
    "Historical trends and insights",
    "Integration with Apple Health & Google Fit",
    "Export data in standard formats",
    "Dark mode for nighttime use",
  ];

  const deviceSpecs = [
    { label: "Battery Life", value: "7 days" },
    { label: "Charging", value: "Wireless USB-C" },
    { label: "Water Resistance", value: "IP68 rated" },
    { label: "Sensors", value: "PPG, Accelerometer, Gyroscope" },
    { label: "Connectivity", value: "Bluetooth 5.2" },
    { label: "Materials", value: "Hypoallergenic silicone" },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Our Products
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive sleep wellness solutions combining mobile applications and
            advanced wearable technology.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <ProductCard
            image={appImage}
            title="Sleep Tracker App"
            description="Our flagship mobile application brings professional-grade sleep analysis to your smartphone. Available for both iOS and Android, the app provides real-time insights and long-term trends to help you optimize your sleep."
            features={[
              "Automatic sleep detection and tracking",
              "Detailed analysis of sleep stages (REM, deep, light)",
              "Smart alarm that wakes you during light sleep",
              "Personalized sleep score and recommendations",
            ]}
          />

          <div className="mt-16">
            <h3 className="font-display font-semibold text-2xl mb-8">
              Complete Feature Set
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {appFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 p-6 bg-card rounded-xl border border-border">
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" data-testid="badge-platform-ios">iOS 15+</Badge>
              <Badge variant="secondary" data-testid="badge-platform-android">Android 10+</Badge>
              <Badge variant="secondary" data-testid="badge-status">In Development</Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <ProductCard
            image={deviceImage}
            title="Wearable Sleep Device"
            description="Designed for comfort and precision, our wearable device tracks your sleep metrics throughout the night using advanced biometric sensors. Lightweight and unobtrusive, it syncs seamlessly with our mobile app."
            features={[
              "Continuous heart rate and HRV monitoring",
              "Movement and position tracking",
              "Temperature and environmental sensing",
              "Long battery life with wireless charging",
            ]}
            reverse
          />

          <div className="mt-16">
            <h3 className="font-display font-semibold text-2xl mb-8">
              Technical Specifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deviceSpecs.map((spec, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-1">{spec.label}</p>
                    <p className="font-semibold text-lg">{spec.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-12 p-6 bg-background rounded-xl border border-border">
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" data-testid="badge-device-status">In Development</Badge>
              <Badge variant="secondary">CE Certified</Badge>
              <Badge variant="secondary">FCC Compliant</Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            Coming Soon
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-6">
            Our products are currently in development. We're working hard to bring these
            innovative sleep wellness solutions to iOS and Android platforms.
          </p>
          <p className="text-primary-foreground/90">
            Sign up for updates on our homepage to be notified when we launch.
          </p>
        </div>
      </section>
    </div>
  );
}
