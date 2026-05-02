"use client";

import * as React from "react";
import {
  Container,
  FadeInUp,
  FadeInLeft,
  StaggerContainer,
  StaggerItemRight,
  PulseGlow,
  CountUp,
  DecorativeRing,
} from "@/components/ui";

const promises = [
  { number: "01", title: "On-Time Delivery Guarantee", desc: "We hit every milestone. Miss a deadline? We work until it ships — at no extra charge." },
  { number: "02", title: "Transparent Pricing", desc: "No hidden fees, no surprise invoices. Fixed-price milestones agreed upfront." },
  { number: "03", title: "Weekly Progress Updates", desc: "Live demos and written summaries every Friday so you're never left wondering." },
  { number: "04", title: "100% Code Ownership", desc: "Everything we build is yours. Full source code, no vendor lock-in, ever." },
  { number: "05", title: "Post-Launch Support", desc: "30 days of included support after go-live to squash bugs and smooth the rollout." },
  { number: "06", title: "Money-Back Guarantee", desc: "Not satisfied after the first sprint? We refund your deposit, no questions asked." },
];

export function Promises() {
  return (
    <section
      id="promises"
      className="bg-[#141414] py-20 lg:py-28 relative overflow-hidden"
    >
      {/* Background glow with pulse animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <PulseGlow
          duration={6}
          className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full"
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              backgroundColor: "#F5A623",
              opacity: 0.08,
              filter: "blur(120px)",
            }}
          />
        </PulseGlow>

        {/* Decorative rings */}
        <DecorativeRing position="top-right" size={500} opacity={0.04} />
        <DecorativeRing position="bottom-left" size={350} opacity={0.03} />

        {/* Noise texture overlay */}
        <div className="absolute inset-0 noise-texture opacity-50" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Side - Stats */}
          <div className="lg:col-span-2">
            <FadeInUp>
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3">
                Why RenderNext
              </span>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight tracking-tight mb-10">
                Our Commitment to You
              </h2>
            </FadeInUp>

            {/* Big Stats */}
            <div className="space-y-8">
              <FadeInLeft delay={0.2}>
                <p className="font-heading font-black text-[#F5A623] leading-none mb-2"
                  style={{ fontSize: "clamp(5rem, 12vw, 9rem)", lineHeight: 1 }}>
                  <CountUp end={100} suffix="%" duration={2} />
                </p>
                <p className="text-gray-400 text-base leading-relaxed">Client Satisfaction Rate</p>
              </FadeInLeft>

              <FadeInLeft delay={0.3}>
                <p className="font-heading font-black text-white leading-none mb-2"
                  style={{ fontSize: "clamp(5rem, 12vw, 9rem)", lineHeight: 1 }}>
                  <CountUp end={24} suffix="/7" duration={2} />
                </p>
                <p className="text-gray-400 text-base leading-relaxed">Support & Communication</p>
              </FadeInLeft>
            </div>
          </div>

          {/* Right Side - Promise Cards */}
          <div className="lg:col-span-3">
            <StaggerContainer
              staggerDelay={0.1}
              delayChildren={0.2}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {promises.map((promise) => (
                <StaggerItemRight key={promise.number}>
                  <div
                    className="p-6 rounded-xl group backdrop-blur-md relative overflow-hidden
                      bg-white/[0.04] border border-white/10
                      hover:bg-white/[0.08] hover:border-[#F5A623]/40
                      transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-[#F5A623]/10"
                  >
                    {/* Hover glow corner */}
                    <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-[#F5A623]/0
                      group-hover:bg-[#F5A623]/10 transition-all duration-500 blur-xl" />

                    <span className="text-[#F5A623] font-mono text-xs font-semibold tracking-widest">
                      {promise.number}
                    </span>
                    <h3 className="text-white font-bold text-base leading-snug mt-2 mb-2
                      group-hover:text-[#F5A623] transition-colors duration-300">
                      {promise.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                      {promise.desc}
                    </p>
                  </div>
                </StaggerItemRight>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </Container>
    </section>
  );
}
