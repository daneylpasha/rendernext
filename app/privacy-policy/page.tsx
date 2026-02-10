import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "RenderNext privacy policy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#141414] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Privacy Policy</span>
          </nav>

          <h1 className="text-4xl lg:text-5xl font-bold font-heading">
            Privacy Policy
          </h1>
          <p className="text-gray-400 mt-4">Last updated: January 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed">
              At RenderNext (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may collect information about you in a variety of ways:
            </p>
            <h3 className="text-xl font-bold font-heading text-gray-900 mt-6 mb-3">
              Personal Data
            </h3>
            <p className="text-gray-600 leading-relaxed">
              When you contact us or request our services, we may collect personally identifiable information, such as your name, email address, phone number, and company name. We only collect this information when you voluntarily provide it to us.
            </p>
            <h3 className="text-xl font-bold font-heading text-gray-900 mt-6 mb-3">
              Automatically Collected Information
            </h3>
            <p className="text-gray-600 leading-relaxed">
              When you visit our website, we may automatically collect certain information about your device, including your IP address, browser type, operating system, access times, and the pages you have viewed. This information helps us improve our website and services.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To deliver the services you request</li>
              <li>To send you updates, newsletters, and marketing communications (with your consent)</li>
              <li>To improve our website, services, and user experience</li>
              <li>To analyze usage patterns and trends</li>
              <li>To protect against fraud and unauthorized access</li>
            </ul>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
              Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities. Cookies are small data files stored on your device that help us improve your experience on our website.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our website.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
              Third-Party Services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may use third-party services that collect, monitor, and analyze information to help us improve our services. These third parties have their own privacy policies addressing how they use such information. Third-party services we may use include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
              <li>Google Analytics for website analytics</li>
              <li>Email service providers for communication</li>
              <li>Cloud hosting providers for data storage</li>
            </ul>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
              Data Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
              Your Rights
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to opt out of marketing communications</li>
              <li>The right to data portability</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              To exercise any of these rights, please contact us using the information below.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
              Children&apos;s Privacy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this Privacy Policy periodically.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mt-4">
              <p className="text-gray-900 font-semibold">RenderNext</p>
              <p className="text-gray-600 mt-1">Austin, Texas</p>
              <p className="text-gray-600">
                Email:{" "}
                <a
                  href="mailto:info@rendernext.io"
                  className="text-mustard hover:underline"
                >
                  info@rendernext.io
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
