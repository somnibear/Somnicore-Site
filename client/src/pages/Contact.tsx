import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@somnicore.com",
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "We typically respond within 24-48 hours",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "United States",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Have questions about our products or technology? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display font-semibold text-2xl mb-8">
                Send us a message
              </h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <p className="text-muted-foreground">{info.content}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 p-6 bg-card rounded-xl border border-border">
                <h3 className="font-semibold mb-3">Business Information</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Somnicore LLC is a registered limited liability company dedicated to
                  developing innovative sleep wellness technology. We are currently
                  preparing applications for iOS and Android developer programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
