export default function Privacy() {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">Last Updated: October 31, 2025</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg max-w-none">
          <div className="space-y-8">
            <div>
              <h2 className="font-display font-semibold text-2xl mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Somnicore LLC ("we," "our," or "us") is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you use our mobile applications and wearable devices.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl mb-4">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Account information (name, email address)</li>
                <li>Sleep data collected through our devices and applications</li>
                <li>Device information and usage statistics</li>
                <li>Communications you send to us</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Generate personalized sleep insights and recommendations</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Detect, prevent, and address technical issues</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your
                personal information against unauthorized access, alteration, disclosure, or
                destruction. All data transmission is encrypted using industry-standard protocols.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl mb-4">Data Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal information. We may share your information only in
                the following circumstances: with your consent, to comply with legal obligations,
                or with service providers who assist in our operations under strict
                confidentiality agreements.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl mb-4">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Export your data in a portable format</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at
                privacy@somnicore.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
