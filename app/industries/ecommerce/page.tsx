"use client";

import {
  ShoppingCart,
  Package,
  CreditCard,
  Truck,
  BarChart3,
  Users,
  Search,
  Star,
} from "lucide-react";
import { IndustryPageTemplate } from "@/components/templates/IndustryPageTemplate";

export default function EcommercePage() {
  return (
    <IndustryPageTemplate
      industry="E-commerce"
      headline="Build Shopping Experiences That Convert and Scale"
      subheadline="From mobile shopping apps to full-scale marketplace platforms, we create e-commerce solutions that drive revenue, reduce cart abandonment, and deliver seamless omnichannel experiences for millions of customers."
      heroIcon={ShoppingCart}
      accentColor="orange"
      challenges={[
        {
          icon: ShoppingCart,
          title: "Cart Abandonment",
          description:
            "Nearly 70% of online shopping carts are abandoned. Streamlined checkout flows, saved carts, push notifications, and one-tap payments help recover lost sales and boost conversion rates.",
        },
        {
          icon: BarChart3,
          title: "Performance at Scale",
          description:
            "Flash sales, holiday traffic, and viral products can overwhelm unprepared systems. Your app needs to handle 10x traffic spikes without slowdowns, crashes, or lost transactions.",
        },
        {
          icon: Users,
          title: "Omnichannel Complexity",
          description:
            "Customers expect seamless experiences across mobile, web, in-store, and social channels. Inventory, pricing, and order data must stay synchronized in real-time across all touchpoints.",
        },
        {
          icon: Search,
          title: "Product Discovery",
          description:
            "With thousands of products, customers struggle to find what they need. AI-powered search, personalized recommendations, and intuitive filters are essential for driving engagement and sales.",
        },
      ]}
      solutions={[
        {
          title: "Mobile Shopping Apps",
          description:
            "Native iOS and Android apps that deliver fast, engaging shopping experiences with high conversion rates.",
          features: [
            "Lightning-fast product browsing and search",
            "Intuitive category navigation and filtering",
            "Wishlist and favorites functionality",
            "Push notifications for sales and restock alerts",
            "Social sharing and referral programs",
            "User reviews and ratings system",
            "Guest checkout and account creation",
            "Order history and easy reordering",
          ],
        },
        {
          title: "Marketplace Platforms",
          description:
            "Multi-vendor marketplaces that connect buyers and sellers with robust management tools for all parties.",
          features: [
            "Multi-vendor product listings and storefronts",
            "Seller onboarding and verification workflows",
            "Commission and fee management systems",
            "Vendor dashboard with sales analytics",
            "Dispute resolution and review moderation",
            "Centralized order and fulfillment management",
            "Split payment processing",
            "Seller ratings and performance metrics",
          ],
        },
        {
          title: "Inventory & Order Management",
          description:
            "Real-time inventory tracking and order processing systems that integrate with your existing operations.",
          features: [
            "Real-time inventory sync across channels",
            "Low stock alerts and auto-reorder triggers",
            "Warehouse and location management",
            "Order routing and fulfillment optimization",
            "Returns and exchange processing",
            "Barcode scanning and SKU management",
            "Supplier and purchase order integration",
            "Inventory forecasting and analytics",
          ],
        },
        {
          title: "Payment & Checkout",
          description:
            "Secure, frictionless payment processing that supports multiple methods and maximizes conversion.",
          features: [
            "One-tap checkout with saved payment methods",
            "Apple Pay, Google Pay, and wallet integration",
            "Buy now, pay later (BNPL) options",
            "Multiple currency support",
            "Subscription and recurring billing",
            "Coupon and promotion code systems",
            "Tax calculation and compliance",
            "Fraud detection and prevention",
          ],
        },
      ]}
      useCases={[
        {
          title: "Fashion & Apparel App",
          description:
            "A mobile-first shopping experience for clothing brands with AR virtual try-on and size recommendations.",
          features: [
            "AR-powered virtual try-on for clothes and accessories",
            "AI size recommendation based on measurements",
            "Visual search to find similar items",
            "Lookbook and outfit builder features",
            "Influencer collaboration and shoppable posts",
          ],
        },
        {
          title: "Grocery Delivery Platform",
          description:
            "On-demand grocery ordering with real-time inventory, substitution handling, and delivery scheduling.",
          features: [
            "Store-specific inventory and pricing",
            "Smart substitution suggestions",
            "Delivery time slot selection",
            "Real-time order tracking",
            "Recurring order schedules",
          ],
        },
        {
          title: "B2B Wholesale Marketplace",
          description:
            "Enterprise buying platform with bulk ordering, custom pricing tiers, and approval workflows.",
          features: [
            "Custom pricing per customer segment",
            "Bulk ordering and quote requests",
            "Multi-user accounts with approval workflows",
            "Net payment terms and invoicing",
            "Catalog and contract management",
          ],
        },
      ]}
      compliance={[
        {
          name: "PCI DSS",
          description:
            "Payment Card Industry Data Security Standard compliance for secure credit card processing and storage.",
        },
        {
          name: "GDPR / CCPA",
          description:
            "Data privacy compliance for customer information handling, consent management, and data rights.",
        },
        {
          name: "SOC 2",
          description:
            "Security and availability controls for enterprise e-commerce platforms handling sensitive business data.",
        },
      ]}
      techStack={[
        {
          name: "React Native / Expo",
          description: "Cross-platform mobile apps with native performance for iOS and Android.",
        },
        {
          name: "Stripe / Braintree",
          description: "PCI-compliant payment processing with fraud prevention and global support.",
        },
        {
          name: "Algolia / Elasticsearch",
          description: "Lightning-fast product search with filters, facets, and autocomplete.",
        },
        {
          name: "Firebase / Supabase",
          description: "Real-time sync, authentication, and cloud functions for dynamic apps.",
        },
        {
          name: "Shopify / Commerce.js",
          description: "Headless commerce backends for flexible, scalable storefronts.",
        },
        {
          name: "AWS / Cloudflare",
          description: "Global CDN and edge computing for fast load times worldwide.",
        },
      ]}
      ctaHeadline="Ready to Launch Your E-commerce App?"
      ctaDescription="Whether you're building a mobile shopping app, launching a marketplace, or modernizing your retail experience, we'll help you create an e-commerce solution that drives revenue and delights customers."
    />
  );
}
