import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import ProductCard from "@/components/ProductCard";
import TrustBadges from "@/components/TrustBadges";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Smartphone, Cpu, BarChart3 } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import heroImage from "@assets/generated_images/Peaceful_bedroom_twilight_scene_ec765815.png";
import appImage from "@assets/generated_images/Sleep_tracker_app_interface_ad2f3cd3.png";
import deviceImage from "@assets/generated_images/Sleep_tracking_wearable_device_9e09a359.png";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleEmailSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email signup:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen">
      <Hero
        title="Better Sleep Starts Here"
        subtitle="Advanced sleep tracking technology powered by science to help you achieve optimal rest and wellness."
        primaryCta={{ text: "Explore Technology", href: "/products" }}
        secondaryCta={{ text: "Learn More", href: "/about" }}
        backgroundImage={heroImage}
      />

      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Transform Your Sleep Wellness
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Somnicore combines cutting-edge hardware and intelligent software to provide
              comprehensive sleep tracking and personalized insights for better rest.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Smartphone}
              title="Mobile Apps"
              description="Track your sleep patterns with our intuitive iOS and Android applications designed for ease of use and comprehensive data visualization."
            />
            <FeatureCard
              icon={Cpu}
              title="Smart Hardware"
              description="Our proprietary wearable devices use advanced sensors to monitor sleep cycles, heart rate, and environmental factors."
            />
            <FeatureCard
              icon={BarChart3}
              title="Data Analytics"
              description="Receive personalized insights and recommendations based on your unique sleep patterns and wellness goals."
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="max-w-6xl mx-auto px-6 space-y-24">
          <ProductCard
            image={appImage}
            title="Sleep Tracker App"
            description="Our mobile application provides comprehensive sleep analysis with real-time tracking and personalized insights to help you understand and improve your sleep quality."
            features={[
              "Real-time sleep cycle monitoring and analysis",
              "Personalized sleep recommendations based on your data",
              "Integration with Apple Health and Google Fit platforms",
              "Smart alarm that wakes you at optimal sleep phase",
            ]}
          />

          <ProductCard
            image={deviceImage}
            title="Wearable Device"
            description="Premium hardware designed with comfort and accuracy in mind. Our wearable seamlessly tracks your sleep metrics throughout the night without disrupting your rest."
            features={[
              "Advanced biometric sensors for precise data collection",
              "7-day battery life with wireless charging",
              "Water-resistant and hypoallergenic materials",
              "Automatic sync with mobile app via Bluetooth",
            ]}
            reverse
          />
        </div>
      </section>

      <section className="py-16 bg-background border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <TrustBadges />
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            Join the Future of Sleep Wellness
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Be the first to know when our products launch and receive exclusive early access.
          </p>

          <form onSubmit={handleEmailSignup} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-primary-foreground text-foreground"
              data-testid="input-cta-email"
            />
            <Button
              type="submit"
              variant="secondary"
              size="lg"
              data-testid="button-cta-signup"
            >
              Get Started
            </Button>
          </form>

          <p className="text-sm mt-4 text-primary-foreground/70">
            We respect your privacy. No spam, ever.
          </p>

          <div className="mt-8">
            <Link href="/contact">
              <Button variant="outline" size="lg" className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20" data-testid="button-cta-contact">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
