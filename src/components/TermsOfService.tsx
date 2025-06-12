import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-8">Instant App Co. - Terms of Service</h1>
        <p className="text-gray-300 mb-8">Effective Date: March 15, 2024</p>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-8">
            Welcome to Instant App Co. ("Company," "we," "our," or "us"). By purchasing or using our app conversion and development services ("Services"), you ("Client," "you," or "your") agree to these Terms of Service.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">1. Services Provided</h2>
            <p className="text-gray-300">
              We convert and package your existing website or provided content into a mobile web app, PWA, or native app format. The scope of work includes design customization, packaging, limited revisions, and deployment to agreed-upon platforms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">2. Client Responsibilities</h2>
            <p className="text-gray-300">
              You certify that you own or have legal rights to all website content, data, trademarks, and intellectual property provided to us.
            </p>
            <p className="text-gray-300">
              You are responsible for complying with any applicable app store rules, copyright laws, and end-user agreements.
            </p>
            <p className="text-gray-300">
              You agree to review and approve work within a reasonable timeframe.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
            <p className="text-gray-300">You retain ownership of your content.</p>
            <p className="text-gray-300">
              We retain ownership of the platform templates, technology, and any proprietary code we use to build your app.
            </p>
            <p className="text-gray-300">
              Upon final payment, we grant you a license to use the delivered app files for your business.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">4. Payment</h2>
            <p className="text-gray-300">Pricing is provided at time of purchase.</p>
            <p className="text-gray-300">
              Full payment is typically due upfront unless otherwise agreed.
            </p>
            <p className="text-gray-300">
              Fees are non-refundable once production begins.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">5. Limitations of Liability</h2>
            <p className="text-gray-300">
              We are not liable for any lost revenue, data, or damages caused by technical failure, third-party platform issues, or client-supplied content.
            </p>
            <p className="text-gray-300">
              We cannot guarantee acceptance into any app store; app store submission services may require additional compliance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">6. Cancellation & Termination</h2>
            <p className="text-gray-300">
              You may cancel services before production begins for a full refund.
            </p>
            <p className="text-gray-300">
              Either party may terminate services due to material breach of agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">7. Support & Maintenance</h2>
            <p className="text-gray-300">
              Support is offered for initial app delivery and troubleshooting.
            </p>
            <p className="text-gray-300">
              Ongoing updates or feature enhancements may require additional fees.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law</h2>
            <p className="text-gray-300">
              These Terms are governed by the laws of the State of California, without regard to conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">9. Changes</h2>
            <p className="text-gray-300">
              We may modify these Terms. The current version will always be available on our website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 