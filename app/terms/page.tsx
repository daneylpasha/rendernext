import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "RenderNext terms of service. Read the terms and conditions for using our services.",
};

export default function TermsPage() {
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
            <span className="text-white">Terms of Service</span>
          </nav>

          <h1 className="text-4xl lg:text-5xl font-bold font-heading">
            Terms of Service
          </h1>
          <p className="text-gray-400 mt-4">Last updated: January 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed">
              Welcome to RenderNext. These Terms of Service (&quot;Terms&quot;) govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing our website or engaging our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
              2. Description of Services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              RenderNext provides digital product development services including, but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
              <li>Mobile application development (iOS and Android)</li>
              <li>Web application development</li>
              <li>AI and machine learning solutions</li>
              <li>UI/UX design services</li>
              <li>MVP development</li>
              <li>Maintenance and support services</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              The specific scope of services will be outlined in a separate agreement or statement of work between you and RenderNext.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
              3. User Responsibilities
            </h2>
            <p className="text-gray-600 leading-relaxed">
              When using our services, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not interfere with or disrupt our services</li>
              <li>Provide timely feedback and approvals as required for project completion</li>
              <li>Pay all fees associated with your engagement in a timely manner</li>
            </ul>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
              4. Intellectual Property
            </h2>
            <h3 className="text-xl font-bold font-heading text-gray-900 mt-6 mb-3">
              Our Intellectual Property
            </h3>
            <p className="text-gray-600 leading-relaxed">
              All content on our website, including text, graphics, logos, and software, is the property of RenderNext and is protected by intellectual property laws. You may not use, reproduce, or distribute our content without our written permission.
            </p>
            <h3 className="text-xl font-bold font-heading text-gray-900 mt-6 mb-3">
              Client Work Product
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Unless otherwise specified in a written agreement, upon full payment of all fees, the client will own the intellectual property rights to the custom work product created specifically for their project. RenderNext retains the right to use general skills, knowledge, and reusable components developed during the engagement.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
              5. Payment Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Payment terms will be outlined in the specific agreement for your project. Generally:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
              <li>A deposit may be required before work begins</li>
              <li>Payments are due according to the schedule in your agreement</li>
              <li>Late payments may result in project delays or suspension</li>
              <li>All fees are non-refundable unless otherwise specified</li>
            </ul>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To the maximum extent permitted by law, RenderNext shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, arising out of or relating to your use of our services.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Our total liability for any claims arising from our services shall not exceed the total amount paid by you for the specific services giving rise to the claim.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
              7. Warranties and Disclaimers
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, error-free, or secure.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              We provide a warranty period for delivered work as specified in your project agreement, during which we will fix bugs and issues at no additional cost.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
              8. Termination
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Either party may terminate a project engagement according to the terms specified in the project agreement. Upon termination:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
              <li>You will pay for all work completed up to the termination date</li>
              <li>We will deliver all completed work product</li>
              <li>Both parties will return or destroy any confidential information</li>
            </ul>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
              9. Confidentiality
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the engagement. This obligation survives the termination of the relationship.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
              10. Governing Law
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be resolved in the courts located in Travis County, Texas.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
              11. Changes to Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the &quot;Last updated&quot; date. Your continued use of our services after such changes constitutes acceptance of the new Terms.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
              12. Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have questions about these Terms, please contact us at:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mt-4">
              <p className="text-gray-900 font-semibold">RenderNext</p>
              <p className="text-gray-600 mt-1">Austin, Texas</p>
              <p className="text-gray-600">
                Email:{" "}
                <a
                  href="mailto:hello@rendernext.io"
                  className="text-mustard hover:underline"
                >
                  hello@rendernext.io
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
