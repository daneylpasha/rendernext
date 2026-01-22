"use client";

import * as React from "react";
import Link from "next/link";
import { CheckCircle, ExternalLink, ArrowRight, Bell, CreditCard, ShoppingCart, TrendingUp } from "lucide-react";
import {
  Container,
  FadeInLeft,
  FadeInRight,
} from "@/components/ui";

const features = [
  "Native iOS & Android apps",
  "Push notifications with 90% open rate",
  "Apple Pay & Google Pay checkout",
  "Abandoned cart recovery",
];

const stats = [
  { value: "3x", label: "Higher Conversion" },
  { value: "2 Weeks", label: "To Launch" },
  { value: "$49", label: "Starting Price" },
];

export function FeaturedProduct() {
  return (
    <section id="featured-product" className="bg-gray-50 py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <FadeInLeft>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#F5A623]/10 text-[#F5A623] text-sm font-semibold uppercase tracking-widest mb-4">
                Our Flagship SaaS
              </span>
            </FadeInLeft>

            <FadeInLeft delay={0.1}>
              <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                Cartaisy
              </h2>
            </FadeInLeft>

            <FadeInLeft delay={0.15}>
              <p className="text-lg lg:text-xl font-medium text-gray-600 leading-snug mt-3">
                Mobile Apps for Shopify Stores
              </p>
            </FadeInLeft>

            <FadeInLeft delay={0.2}>
              <p className="text-gray-600 font-normal leading-relaxed mt-6">
                We don&apos;t just build apps for clients — we build our own. Cartaisy
                transforms Shopify stores into native mobile apps with push notifications,
                Apple Pay, and abandoned cart recovery. It&apos;s proof that we practice
                what we preach.
              </p>
            </FadeInLeft>

            {/* Stats */}
            <FadeInLeft delay={0.22}>
              <div className="flex gap-8 mt-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-[#F5A623]">{stat.value}</p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeInLeft>

            {/* Feature List */}
            <FadeInLeft delay={0.25}>
              <ul className="mt-8 space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F5A623] flex-shrink-0" />
                    <span className="text-gray-700 font-normal">{feature}</span>
                  </li>
                ))}
              </ul>
            </FadeInLeft>

            {/* Buttons */}
            <FadeInLeft delay={0.3}>
              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="https://cartaisy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5A623] text-[#141414] font-semibold text-base rounded-xl
                    hover:bg-[#ffb84d] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#F5A623]/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Cartaisy
                </a>
                <Link
                  href="/work/cartaisy"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium text-sm rounded-xl
                    hover:border-[#F5A623] hover:text-[#F5A623] transition-all duration-300"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInLeft>
          </div>

          {/* Right Visual */}
          <FadeInRight delay={0.2}>
            <div className="relative">
              {/* Gradient Background Card */}
              <div
                className="aspect-[4/3] rounded-3xl flex flex-col items-center justify-center relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(245, 166, 35, 0.1) 0%, rgba(255, 140, 0, 0.1) 100%)",
                }}
              >
                {/* Decorative elements */}
                <div
                  className="absolute top-0 right-0 w-64 h-64 rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(245, 166, 35, 0.15) 0%, transparent 70%)",
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 w-48 h-48 rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(245, 166, 35, 0.1) 0%, transparent 70%)",
                  }}
                />

                {/* Phone Mockup */}
                <div className="relative z-10 flex flex-col items-center">
                  {/* Phone frame */}
                  <div className="w-48 h-96 rounded-[32px] bg-gradient-to-br from-gray-800 to-gray-900 p-2 shadow-2xl">
                    <div className="w-full h-full rounded-[24px] bg-[#1a1a1a] overflow-hidden relative">
                      {/* App UI mockup */}
                      <div className="p-3">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <p className="text-white/60 text-[8px]">Welcome back</p>
                            <p className="text-white font-semibold text-[10px]">Fashion Store</p>
                          </div>
                          <div className="w-6 h-6 bg-[#F5A623] rounded-full flex items-center justify-center">
                            <ShoppingCart className="w-3 h-3 text-black" />
                          </div>
                        </div>

                        {/* Banner */}
                        <div className="bg-gradient-to-r from-[#F5A623]/30 to-[#F5A623]/10 rounded-lg p-2 mb-3">
                          <p className="text-[#F5A623] text-[8px] font-semibold">NEW ARRIVALS</p>
                          <p className="text-white text-[10px] font-bold">Summer Collection</p>
                        </div>

                        {/* Product grid */}
                        <div className="grid grid-cols-2 gap-1.5">
                          {[1,2,3,4].map((i) => (
                            <div key={i} className="bg-white/5 rounded-md p-1.5">
                              <div className="bg-white/10 rounded aspect-square mb-1" />
                              <div className="bg-white/20 h-1.5 rounded w-3/4 mb-0.5" />
                              <div className="bg-[#F5A623]/60 h-1.5 rounded w-1/2" />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Notch */}
                      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-8 left-8 px-3 py-2 rounded-xl bg-white shadow-lg flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                    <Bell className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">Push Sent!</p>
                    <p className="text-[10px] text-green-600">90% open rate</p>
                  </div>
                </div>
                <div className="absolute bottom-12 right-8 px-3 py-2 rounded-xl bg-white shadow-lg flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                    <CreditCard className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">Apple Pay</p>
                    <p className="text-[10px] text-gray-500">10s checkout</p>
                  </div>
                </div>
                <div className="absolute top-1/2 right-4 px-2 py-1.5 rounded-lg bg-[#F5A623] shadow-lg">
                  <TrendingUp className="w-4 h-4 text-black" />
                </div>
              </div>
            </div>
          </FadeInRight>
        </div>
      </Container>
    </section>
  );
}
