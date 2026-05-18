import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – MarchBuddy",
  description:
    "Privacy Policy for the MarchBuddy app, developed by Daniyal Pasha.",
  robots: { index: false, follow: false },
};

export default function MarchBuddyPrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-gray-300">
      {/* Header */}
      <div className="border-b border-white/10 py-5 px-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link
            href="/work/marchbuddy"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to MarchBuddy
          </Link>
          <span className="text-xs text-gray-600 uppercase tracking-widest font-medium">
            Legal
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16 lg:py-24">
        {/* Title block */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 text-lime-400 text-xs font-semibold uppercase tracking-widest mb-6">
            MarchBuddy
          </div>
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-4 leading-tight">
            Privacy Policy
          </h1>
          <div className="text-sm text-gray-500 space-y-1">
            <p><span className="text-gray-400">Effective Date:</span> May 18, 2026</p>
            <p><span className="text-gray-400">Last Updated:</span> May 18, 2026</p>
            <p><span className="text-gray-400">Developer:</span> Daniyal Pasha</p>
            <p>
              <span className="text-gray-400">Contact:</span>{" "}
              <a
                href="mailto:reach.dpasha@gmail.com"
                className="text-lime-400 hover:text-lime-300 transition-colors"
              >
                reach.dpasha@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Intro */}
        <div className="prose-block mb-10">
          <p className="text-gray-400 leading-relaxed">
            This Privacy Policy describes how <strong className="text-white">MarchBuddy</strong>, operated by Daniyal Pasha, collects, uses, stores, and protects your personal information when you use the MarchBuddy mobile application available on the Google Play Store and Apple App Store.
          </p>
          <p className="text-gray-400 leading-relaxed mt-4">
            By downloading, installing, or using MarchBuddy, you agree to the practices described in this Privacy Policy. If you do not agree with this policy, please do not use the App.
          </p>
        </div>

        <hr className="border-white/10 mb-10" />

        {/* Sections */}
        <PolicySection title="Information We Collect">
          <p>We collect the following types of information when you use MarchBuddy.</p>

          <PolicySubheading>Information You Provide Directly</PolicySubheading>
          <ul>
            <li>Account information: name, email address, password, and profile photo when you create an account.</li>
            <li>Fitness profile data: age, gender, height, weight, fitness goals, body type, activity level, and workout preferences.</li>
            <li>Health and activity data: workout logs, progress photos, body measurements, and goal tracking entries that you choose to enter.</li>
            <li>Subscription and payment information: handled securely through Google Play Billing or Apple In-App Purchase. We do not store your payment card details on our servers.</li>
            <li>Communications: information you provide when you contact our support team, submit feedback, or reply to in-app surveys.</li>
          </ul>

          <PolicySubheading>Information Collected Automatically</PolicySubheading>
          <ul>
            <li>Device information: device model, operating system, unique device identifiers, and app version.</li>
            <li>Usage data: features used, screens visited, session duration, and interaction patterns.</li>
            <li>Diagnostic data: crash logs and performance data used to improve app stability.</li>
            <li>Approximate location: only if you grant permission and only for fitness-related features.</li>
          </ul>

          <PolicySubheading>Information From Third Parties</PolicySubheading>
          <ul>
            <li>Authentication providers: if you sign in using Google, Apple, or another third-party login, we receive basic profile information (name, email, profile image) authorized by you.</li>
            <li>Analytics providers: aggregated, non-identifying usage statistics.</li>
          </ul>
        </PolicySection>

        <PolicySection title="How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul>
            <li>Create and manage your MarchBuddy account.</li>
            <li>Personalize AI-generated workout plans, meal plans, and fitness recommendations.</li>
            <li>Track your progress and provide insights tailored to your goals.</li>
            <li>Process subscriptions and in-app purchases.</li>
            <li>Send service-related notifications, reminders, and updates.</li>
            <li>Respond to customer support requests.</li>
            <li>Improve app performance, fix bugs, and develop new features.</li>
            <li>Detect, prevent, and address fraud, abuse, or security issues.</li>
            <li>Comply with legal obligations.</li>
          </ul>
        </PolicySection>

        <PolicySection title="AI-Powered Features">
          <p>
            MarchBuddy uses artificial intelligence to generate personalized fitness plans, analyze your progress, and offer recommendations. Data you provide (such as fitness profile and goals) may be processed by trusted third-party AI providers to generate these results. This data is used solely for delivering app features and is not used to train public AI models.
          </p>
        </PolicySection>

        <PolicySection title="Sharing of Information">
          <p>We do not sell your personal data. We may share information only in the following limited cases:</p>
          <ul>
            <li><strong className="text-white">Service providers:</strong> with trusted vendors who help us operate the App (cloud hosting, analytics, crash reporting, AI processing, customer support). These providers are bound by strict confidentiality and data protection agreements.</li>
            <li><strong className="text-white">Payment processors:</strong> Google Play and Apple App Store handle all payment transactions.</li>
            <li><strong className="text-white">Legal requirements:</strong> when required by law, court order, or government request, or to protect the rights, property, or safety of MarchBuddy, our users, or others.</li>
            <li><strong className="text-white">Business transfers:</strong> if MarchBuddy is involved in a merger, acquisition, or asset sale, your information may be transferred, and we will notify you before your data becomes subject to a different privacy policy.</li>
          </ul>
          <p className="mt-4">We do not share your fitness, health, or progress data with advertisers.</p>
        </PolicySection>

        <PolicySection title="Data Storage and Security">
          <p>
            Your data is stored on secure servers operated by trusted cloud providers. We use industry-standard security measures including:
          </p>
          <ul>
            <li>Encrypted data transmission (HTTPS / TLS)</li>
            <li>Encrypted storage of sensitive data</li>
            <li>Access controls and authentication</li>
            <li>Regular security reviews</li>
          </ul>
          <p className="mt-4">
            While we take reasonable steps to protect your information, no method of transmission or storage on the internet is 100% secure. You use the App at your own risk.
          </p>
        </PolicySection>

        <PolicySection title="Data Retention">
          <p>
            We retain your personal information for as long as your account is active or as needed to provide the App&apos;s services. If you delete your account, we will delete or anonymize your personal data within 30 days, except where retention is required by law (for example, transaction records for tax purposes).
          </p>
        </PolicySection>

        <PolicySection title="Your Rights and Choices">
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you.</li>
            <li>Update or correct your information at any time from within the App.</li>
            <li>Delete your account and associated personal data.</li>
            <li>Withdraw consent for optional data processing.</li>
            <li>Request a copy of your data in a portable format.</li>
            <li>Opt out of marketing emails or push notifications.</li>
          </ul>
          <p className="mt-4">
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:reach.dpasha@gmail.com" className="text-lime-400 hover:text-lime-300 transition-colors">
              reach.dpasha@gmail.com
            </a>.
          </p>
          <p className="mt-4">
            You may also delete your account directly from within the App under <span className="text-white font-medium">Settings &gt; Account &gt; Delete Account</span>.
          </p>
        </PolicySection>

        <PolicySection title="Children's Privacy">
          <p>
            MarchBuddy is not intended for users under the age of 13 (or under 16 in regions where applicable law requires a higher age). We do not knowingly collect personal information from children. If we learn that we have collected information from a child without verified parental consent, we will delete it promptly. Parents or guardians who believe their child has provided us with personal information may contact us at{" "}
            <a href="mailto:reach.dpasha@gmail.com" className="text-lime-400 hover:text-lime-300 transition-colors">
              reach.dpasha@gmail.com
            </a>.
          </p>
        </PolicySection>

        <PolicySection title="Third-Party Services">
          <p>MarchBuddy may use the following third-party services, each with its own privacy practices:</p>
          <ul>
            <li>Google Play Services (Google LLC)</li>
            <li>Apple App Store Services (Apple Inc.)</li>
            <li>Supabase (database and authentication)</li>
            <li>Expo (app delivery and updates)</li>
            <li>Google Maps Platform (location-based features, when permitted)</li>
            <li>AI and machine learning providers for personalized plan generation</li>
            <li>Analytics and crash reporting services</li>
          </ul>
          <p className="mt-4">We encourage you to review the privacy policies of these third-party services.</p>
        </PolicySection>

        <PolicySection title="Permissions Requested by the App">
          <p>MarchBuddy may request the following permissions on your device:</p>
          <ul>
            <li><strong className="text-white">Camera:</strong> to capture progress photos (only if you choose).</li>
            <li><strong className="text-white">Photo library:</strong> to upload progress photos (only if you choose).</li>
            <li><strong className="text-white">Notifications:</strong> to send workout reminders and updates.</li>
            <li><strong className="text-white">Location (approximate):</strong> only for fitness features that require it.</li>
            <li><strong className="text-white">Internet:</strong> required to sync your data and use AI features.</li>
          </ul>
          <p className="mt-4">You can revoke any permission at any time through your device settings.</p>
        </PolicySection>

        <PolicySection title="International Data Transfers">
          <p>
            Your information may be processed and stored in countries other than your country of residence, including the United States. By using MarchBuddy, you consent to such transfers. We ensure appropriate safeguards are in place to protect your data in compliance with applicable laws.
          </p>
        </PolicySection>

        <PolicySection title="Changes to This Privacy Policy">
          <p>
            We may update this Privacy Policy from time to time. The &quot;Last Updated&quot; date at the top will reflect the most recent revision. Significant changes will be communicated through the App or via email. Your continued use of MarchBuddy after updates means you accept the revised policy.
          </p>
        </PolicySection>

        <PolicySection title="Contact Us">
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact:
          </p>
          <div className="mt-4 bg-white/5 border border-white/10 rounded-xl p-5 space-y-1 text-sm">
            <p><span className="text-gray-500">App Name:</span> <span className="text-white">MarchBuddy</span></p>
            <p><span className="text-gray-500">Developer:</span> <span className="text-white">Daniyal Pasha</span></p>
            <p>
              <span className="text-gray-500">Email:</span>{" "}
              <a href="mailto:reach.dpasha@gmail.com" className="text-lime-400 hover:text-lime-300 transition-colors">
                reach.dpasha@gmail.com
              </a>
            </p>
          </div>
          <p className="mt-4 text-gray-500 text-sm">We aim to respond to all inquiries within 7 business days.</p>
        </PolicySection>

        <hr className="border-white/10 mt-12 mb-8" />

        <p className="text-center text-xs text-gray-600">
          Developed by Daniyal Pasha &nbsp;·&nbsp; MarchBuddy
        </p>
      </div>
    </main>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-heading font-semibold text-white mb-4 pb-2 border-b border-white/10">
        {title}
      </h2>
      <div className="text-gray-400 leading-relaxed space-y-3 [&_ul]:mt-3 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:marker:text-lime-500">
        {children}
      </div>
    </section>
  );
}

function PolicySubheading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mt-5 mb-2">
      {children}
    </h3>
  );
}
