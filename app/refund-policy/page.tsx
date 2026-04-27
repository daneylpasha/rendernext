import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "RenderNext refund policy. Understand our refund terms for custom development projects and sub-brand SaaS products.",
};

export default function RefundPolicyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#141414] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Refund Policy</span>
          </nav>

          <h1 className="text-4xl lg:text-5xl font-bold font-heading">
            Refund Policy
          </h1>
          <p className="text-gray-400 mt-4">Last updated: April 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed">
              At RenderNext (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), we stand behind the quality of our work and the products we build. This Refund Policy outlines the conditions under which refunds may be requested and issued across our custom development services and our sub-brand SaaS and subscription products.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
              1. Custom Development Services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              RenderNext provides bespoke software development services, including web applications, mobile apps, AI solutions, and MVP builds. Due to the time and resources invested in scoping, planning, and executing custom projects, the following terms apply:
            </p>

            <h3 className="text-xl font-bold font-heading text-gray-900 mt-6 mb-3">
              Deposits
            </h3>
            <p className="text-gray-600 leading-relaxed">
              All deposits paid to initiate a project are non-refundable. Deposits cover discovery, scoping, resource allocation, and initial work product and are earned upon receipt.
            </p>

            <h3 className="text-xl font-bold font-heading text-gray-900 mt-6 mb-3">
              Milestone Payments
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Payments tied to completed and approved project milestones are non-refundable. If a milestone deliverable is disputed, we will work in good faith to resolve the issue through revisions as outlined in the project agreement before a refund is considered.
            </p>

            <h3 className="text-xl font-bold font-heading text-gray-900 mt-6 mb-3">
              Client-Initiated Termination
            </h3>
            <p className="text-gray-600 leading-relaxed">
              If you choose to terminate a project before completion, you are responsible for payment of all work completed up to the termination date. Any overpayment beyond completed work will be refunded within 14 business days after a final accounting is agreed upon by both parties.
            </p>

            <h3 className="text-xl font-bold font-heading text-gray-900 mt-6 mb-3">
              RenderNext-Initiated Termination
            </h3>
            <p className="text-gray-600 leading-relaxed">
              In the unlikely event that RenderNext is unable to complete a project, we will refund any amounts paid for work not yet delivered, less a reasonable fee for completed work and expenses incurred.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
              2. SaaS &amp; Subscription Products (Sub-Brands)
            </h2>
            <p className="text-gray-600 leading-relaxed">
              RenderNext builds and operates software products under its sub-brands. Each sub-brand product may have its own refund terms published in its respective terms of service. The general policy below applies unless a sub-brand specifies otherwise.
            </p>

            <h3 className="text-xl font-bold font-heading text-gray-900 mt-6 mb-3">
              Free Trials
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Where a free trial is offered, no charge is made during the trial period. You may cancel at any time before the trial ends without being billed. After the trial converts to a paid subscription, the standard refund terms below apply.
            </p>

            <h3 className="text-xl font-bold font-heading text-gray-900 mt-6 mb-3">
              Monthly Subscriptions
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Monthly subscription fees are billed at the start of each billing cycle and are non-refundable for the current period. You may cancel your subscription at any time, and cancellation will take effect at the end of the current billing period — you will not be charged for future periods.
            </p>

            <h3 className="text-xl font-bold font-heading text-gray-900 mt-6 mb-3">
              Annual Subscriptions
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Annual subscriptions are eligible for a pro-rated refund for unused complete months remaining, provided a refund is requested within 30 days of the annual billing date. After 30 days, annual subscription payments are non-refundable, though your access will continue until the end of the subscription period.
            </p>

            <h3 className="text-xl font-bold font-heading text-gray-900 mt-6 mb-3">
              One-Time Purchases &amp; Add-Ons
            </h3>
            <p className="text-gray-600 leading-relaxed">
              One-time purchases and add-on features are non-refundable once access has been granted or the feature has been activated, unless the product is demonstrably non-functional and we are unable to resolve the issue within a reasonable time.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
              3. Refund Eligibility &amp; Exceptions
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may issue refunds outside the above terms at our sole discretion in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
              <li>Duplicate charges or billing errors — refunded in full promptly upon verification</li>
              <li>Unauthorized charges reported within 60 days of the transaction</li>
              <li>Service outages exceeding the uptime guarantee specified in a product&apos;s SLA</li>
              <li>Failure to deliver a core feature that was explicitly promised at the time of purchase</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Refund requests based on a change of mind, failure to cancel before the next billing cycle, or dissatisfaction with features that are working as described are generally not eligible for a refund.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
              4. How to Request a Refund
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To request a refund, please contact us at{" "}
              <a href="mailto:info@rendernext.io" className="text-mustard hover:underline">
                info@rendernext.io
              </a>{" "}
              with the following information:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
              <li>Your full name and email address associated with the account or project</li>
              <li>The product or service the refund relates to</li>
              <li>The date and amount of the charge</li>
              <li>The reason for your refund request</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              We will acknowledge your request within 2 business days and provide a resolution within 10 business days. Approved refunds are processed to the original payment method and may take 5–10 additional business days to appear depending on your financial institution.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
              5. Chargebacks
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We encourage you to contact us before initiating a chargeback with your bank or card issuer. Chargebacks initiated without first contacting us may result in suspension of your account and any active services while the dispute is under review. We will respond to all chargeback disputes with full documentation of services rendered.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
              6. Changes to This Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Refund Policy from time to time. Changes will be posted on this page with an updated date. We encourage you to review this policy periodically. Continued use of our services after any changes constitutes acceptance of the revised policy.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
              7. Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have questions about this Refund Policy, please reach out:
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
