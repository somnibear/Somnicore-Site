export default function Terms() {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground">Last Updated: October 31, 2025</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg max-w-none">
          <div className="space-y-8">
            <div>
              <h2 className="font-display font-semibold text-2xl mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using Somnicore's services, you agree to be bound by these
                Terms of Service. If you disagree with any part of these terms, you may not
                access our services.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl mb-4">Description of Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                Somnicore LLC provides sleep tracking applications and wearable devices
                designed to help users monitor and improve their sleep quality. Our services
                are intended for personal, non-commercial use.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl mb-4">User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When using our services, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use the service in compliance with all applicable laws</li>
                <li>Not attempt to interfere with or disrupt our services</li>
                <li>Not use our services for any illegal or unauthorized purpose</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl mb-4">Medical Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                Somnicore's products are not medical devices and are not intended to diagnose,
                treat, cure, or prevent any disease. The information provided by our services
                is for informational purposes only and should not replace professional medical
                advice. Always consult with a healthcare provider regarding sleep disorders or
                health concerns.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, features, and functionality of our services, including but not
                limited to software, designs, text, and graphics, are owned by Somnicore LLC
                and are protected by copyright, trademark, and other intellectual property laws.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, Somnicore LLC shall not be liable for
                any indirect, incidental, special, consequential, or punitive damages resulting
                from your use of or inability to use our services.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users
                of any material changes by posting the new Terms of Service on this page and
                updating the "Last Updated" date.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl mb-4">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of
                the United States, without regard to its conflict of law provisions.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us at
                legal@somnicore.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
