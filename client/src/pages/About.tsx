import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Lightbulb, Heart } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your sleep data is yours alone. We use bank-level encryption and never share your personal information with third parties.",
    },
    {
      icon: Users,
      title: "User-Centered Design",
      description: "Every feature we build is informed by user feedback and designed to provide real value in your wellness journey.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously research and integrate the latest sleep science to provide you with cutting-edge technology.",
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Our mission is to improve lives through better sleep, one person at a time.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-6">
            About Somnicore
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            We're on a mission to revolutionize sleep wellness through advanced technology
            and data-driven insights.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Founded by sleep researchers and technology experts, Somnicore LLC develops
            innovative applications and hardware devices that help people understand and
            improve their sleep quality. Our team combines expertise in sleep science,
            data analytics, and user experience design to create products that make a
            real difference in people's lives.
          </p>
          <p className="text-lg leading-relaxed">
            We believe that quality sleep is fundamental to overall health and well-being.
            By providing accurate tracking, personalized insights, and actionable
            recommendations, we empower our users to take control of their sleep wellness
            journey.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 text-center">
            Our Core Values
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            These principles guide everything we do at Somnicore.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-elevate active-elevate-2 transition-all">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-8">
            Our Technology
          </h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Somnicore's technology stack combines advanced biometric sensors, machine
              learning algorithms, and cloud-based analytics to provide comprehensive sleep
              tracking and insights.
            </p>
            <p>
              Our wearable devices use proprietary sensors to monitor heart rate
              variability, movement patterns, and environmental factors throughout the
              night. This data is processed using sophisticated algorithms that identify
              sleep stages, detect disturbances, and calculate sleep quality metrics.
            </p>
            <p>
              The mobile applications we develop for iOS and Android platforms integrate
              seamlessly with our hardware, providing real-time data visualization,
              historical trends, and personalized recommendations. We're committed to
              maintaining compatibility with leading health platforms like Apple Health
              and Google Fit.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            Building the Future of Sleep
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Somnicore LLC is registered as a limited liability company and committed to
            bringing innovative sleep wellness solutions to market. We're currently
            developing our flagship products for launch on iOS and Android platforms.
          </p>
        </div>
      </section>
    </div>
  );
}
