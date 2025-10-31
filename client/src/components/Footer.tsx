import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import logoUrl from "@assets/SomnicoreLogo_1761928231857.jpeg";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={logoUrl} 
                alt="Somnicore Logo" 
                className="h-8 w-auto object-contain"
              />
              <span className="font-display font-semibold text-xl">Somnicore</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Advanced sleep tracking technology for better wellness and rest.
            </p>
            <p className="text-muted-foreground text-xs">
              Somnicore LLC<br />
              © 2024 All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about">
                <Button variant="ghost" className="w-full justify-start h-auto p-2 text-sm" data-testid="link-footer-about">
                  About Us
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="ghost" className="w-full justify-start h-auto p-2 text-sm" data-testid="link-footer-products">
                  Products
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost" className="w-full justify-start h-auto p-2 text-sm" data-testid="link-footer-contact">
                  Contact
                </Button>
              </Link>
              <Link href="/privacy">
                <Button variant="ghost" className="w-full justify-start h-auto p-2 text-sm" data-testid="link-footer-privacy">
                  Privacy Policy
                </Button>
              </Link>
              <Link href="/terms">
                <Button variant="ghost" className="w-full justify-start h-auto p-2 text-sm" data-testid="link-footer-terms">
                  Terms of Service
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Stay updated with our latest sleep wellness insights.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                data-testid="input-newsletter-email"
              />
              <Button type="submit" className="w-full" data-testid="button-newsletter-subscribe">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-2">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
