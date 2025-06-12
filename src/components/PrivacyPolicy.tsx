import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <p className="text-gray-300 mb-8">Last Updated: March 15, 2024</p>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-8">
            At Instant App Co., we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our services.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
            <p className="text-gray-300 mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Contact information (name, email, phone number)</li>
              <li>Website URL and business information</li>
              <li>Payment information</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Provide and improve our services</li>
              <li>Process your payments</li>
              <li>Communicate with you about your project</li>
              <li>Send important updates and announcements</li>
              <li>Respond to your requests and support needs</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
            <p className="text-gray-300">
              We implement appropriate technical and organizational security measures to protect your information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
            <p className="text-gray-300">
              We may use third-party services for payment processing, hosting, and analytics. These services have their own privacy policies and may collect information according to their own practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
            <p className="text-gray-300 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Cookies</h2>
            <p className="text-gray-300">
              We use cookies and similar tracking technologies to improve your experience on our website. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
            <p className="text-gray-300">
              Our services are not intended for children under 13. We do not knowingly collect information from children under 13.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
            <p className="text-gray-300">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@instantappco.com" className="text-blue-400 hover:text-blue-300">
                privacy@instantappco.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 