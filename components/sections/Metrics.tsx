"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Clock, Zap, Shield, MessageSquare, CheckCircle2, Award } from "lucide-react";
import { Container, FadeInUp } from "@/components/ui";

const metrics = [
  {
    icon: Clock,
    value: 6,
    suffix: " weeks",
    label: "Average MVP Delivery",
    description: "From concept to launch",
  },
  {
    icon: Zap,
    value: 40,
    suffix: "%",
    label: "Faster Development",
    description: "With React Native",
  },
  {
    icon: Award,
    value: 99.9,
    suffix: "%",
    label: "Crash-Free Rate",
    description: "Production apps",
  },
  {
    icon: MessageSquare,
    value: 24,
    suffix: "hr",
    label: "Response Time",
    description: "Guaranteed",
  },
  {
    icon: Shield,
    value: 100,
    suffix: "%",
    label: "NDA Protected",
    description: "Your ideas are safe",
  },
  {
    icon: CheckCircle2,
    value: 100,
    suffix: "%",
    label: "On-Time Delivery",
    description: "We hit deadlines",
  },
];

function AnimatedCounter({
  value,
  suffix,
  duration = 2,
}: {
  value: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const endValue = value;

    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = easeOutQuart * endValue;

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, value, duration]);

  const displayValue = value % 1 === 0 ? Math.floor(count) : count.toFixed(1);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export function Metrics() {
  return (
    <section className="bg-[#141414] py-16 lg:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F5A623]/5 rounded-full blur-[150px]" />
      </div>

      <Container>
        <FadeInUp>
          <div className="text-center mb-12 lg:mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5A623]/20 text-[#F5A623] text-sm font-medium mb-4">
              By the Numbers
            </span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              Results We Deliver
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We&apos;re committed to excellence in every project. Here&apos;s what you can expect.
            </p>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/[0.04] border border-white/10 rounded-2xl p-4
                hover:bg-white/[0.07] hover:border-[#F5A623]/30 hover:-translate-y-1
                transition-all duration-300 overflow-hidden text-center"
            >
              {/* Corner glow */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-[#F5A623]/0
                group-hover:bg-[#F5A623]/15 transition-all duration-500 blur-lg" />

              <div className="w-8 h-8 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mx-auto mb-3
                group-hover:bg-[#F5A623]/25 transition-colors">
                <metric.icon className="w-4 h-4 text-[#F5A623]" />
              </div>
              <div className="text-2xl lg:text-3xl font-heading font-bold text-white mb-1 leading-none">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </div>
              <div className="text-xs font-semibold text-white/90 mt-2 mb-1 leading-snug">
                {metric.label}
              </div>
              <div className="text-xs text-gray-500">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
