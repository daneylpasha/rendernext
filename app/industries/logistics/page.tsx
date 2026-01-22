"use client";

import {
  Truck,
  MapPin,
  Package,
  Clock,
  Route,
  BarChart3,
  Wifi,
  Smartphone,
} from "lucide-react";
import { IndustryPageTemplate } from "@/components/templates/IndustryPageTemplate";

const challenges = [
  {
    icon: MapPin,
    title: "Real-Time Accuracy",
    description:
      "Maintaining precise location tracking across thousands of vehicles requires robust GPS infrastructure, efficient data pipelines, and seamless synchronization between mobile devices and backend systems.",
  },
  {
    icon: Wifi,
    title: "Offline Capabilities",
    description:
      "Drivers operate in areas with unreliable connectivity. Applications must function seamlessly offline, queue data changes, and synchronize automatically when connections are restored.",
  },
  {
    icon: Smartphone,
    title: "Hardware Integration",
    description:
      "Connecting with diverse hardware ecosystems including ELDs, barcode scanners, temperature sensors, and IoT devices while ensuring reliable data transmission and device management.",
  },
  {
    icon: Clock,
    title: "Time-Critical Operations",
    description:
      "Delivery windows are tight and exceptions must be handled instantly. Systems need sub-second response times and intelligent alerting to prevent costly delays and service failures.",
  },
];

const solutions = [
  {
    title: "Fleet Management Platforms",
    description:
      "Comprehensive solutions that provide complete visibility into your fleet operations, from vehicle health to driver performance.",
    features: [
      "Real-time GPS tracking with geofencing",
      "Vehicle diagnostics and maintenance scheduling",
      "Driver behavior monitoring and scoring",
      "Fuel consumption tracking and optimization",
      "ELD/HOS compliance management",
      "Asset utilization analytics",
      "Multi-fleet and subsidiary management",
      "Customizable dashboards and reports",
    ],
  },
  {
    title: "Delivery Tracking Applications",
    description:
      "End-to-end delivery visibility solutions that keep dispatchers, drivers, and customers informed at every stage of the journey.",
    features: [
      "Live shipment tracking with ETAs",
      "Customer notification systems (SMS, email, push)",
      "Proof of delivery capture (photo, signature, barcode)",
      "Exception management and escalation workflows",
      "Delivery window scheduling and rescheduling",
      "Customer self-service portals",
      "Rating and feedback collection",
      "Delivery attempt and retry management",
    ],
  },
  {
    title: "Route Optimization Solutions",
    description:
      "Intelligent routing engines that minimize miles, reduce fuel costs, and maximize on-time delivery performance.",
    features: [
      "Multi-stop route optimization algorithms",
      "Real-time traffic integration",
      "Dynamic route recalculation",
      "Time window and capacity constraints",
      "Driver skill and vehicle type matching",
      "Territory planning and balancing",
      "What-if scenario modeling",
      "Historical route performance analysis",
    ],
  },
  {
    title: "Warehouse & Inventory Apps",
    description:
      "Mobile-first warehouse applications that streamline receiving, picking, packing, and shipping operations.",
    features: [
      "Barcode and RFID scanning integration",
      "Pick path optimization",
      "Inventory cycle counting",
      "Bin location management",
      "Cross-docking workflow support",
      "Returns processing automation",
      "Real-time inventory visibility",
      "Integration with WMS and ERP systems",
    ],
  },
];

const useCases = [
  {
    title: "Last-Mile Delivery Platform",
    description:
      "A comprehensive solution for managing high-volume last-mile deliveries with real-time visibility for operations teams and end customers.",
    features: [
      "Driver mobile app with turn-by-turn navigation",
      "Customer tracking portal with live map",
      "Automated delivery notifications",
      "Photo proof of delivery with timestamps",
      "Failed delivery workflow management",
      "Driver earnings and performance tracking",
    ],
  },
  {
    title: "Cold Chain Monitoring System",
    description:
      "Temperature-sensitive logistics monitoring that ensures compliance and product integrity throughout the supply chain.",
    features: [
      "IoT sensor integration and data collection",
      "Real-time temperature alerts and escalations",
      "Compliance documentation and reporting",
      "Chain of custody tracking",
      "Predictive analytics for equipment failure",
      "Regulatory audit trail generation",
    ],
  },
  {
    title: "Fleet Dispatch & Driver App",
    description:
      "An integrated dispatch system and driver mobile application that streamlines communication and improves operational efficiency.",
    features: [
      "Drag-and-drop dispatch board",
      "Two-way driver communication",
      "Electronic document management",
      "Hours of service tracking",
      "Vehicle inspection checklists (DVIR)",
      "Load and unload time tracking",
    ],
  },
];

const compliance = [
  {
    name: "ELD Mandate",
    description:
      "Full compliance with FMCSA Electronic Logging Device requirements for hours of service tracking and driver safety regulations.",
  },
  {
    name: "FSMA",
    description:
      "Food Safety Modernization Act compliance for transportation of food products, including temperature monitoring and sanitary transport requirements.",
  },
  {
    name: "DOT Regulations",
    description:
      "Adherence to Department of Transportation requirements including driver qualification files, vehicle maintenance records, and safety protocols.",
  },
  {
    name: "GDP/GMP",
    description:
      "Good Distribution Practice and Good Manufacturing Practice compliance for pharmaceutical and medical device logistics.",
  },
  {
    name: "C-TPAT",
    description:
      "Customs-Trade Partnership Against Terrorism certification support for supply chain security and expedited customs processing.",
  },
  {
    name: "ISO 28000",
    description:
      "Supply chain security management system standards for risk assessment and security best practices.",
  },
];

const techStack = [
  {
    name: "Real-Time GPS & Telematics",
    description:
      "Sub-second location updates using cellular, satellite, and hybrid positioning with intelligent data compression for bandwidth optimization.",
  },
  {
    name: "Offline-First Architecture",
    description:
      "SQLite and IndexedDB local storage with intelligent sync queues ensuring full functionality without network connectivity.",
  },
  {
    name: "Route Optimization Engines",
    description:
      "Advanced algorithms including OSRM and Google OR-Tools for multi-constraint vehicle routing problems at scale.",
  },
  {
    name: "React Native / Flutter",
    description:
      "Cross-platform mobile development for driver apps with native performance, background location tracking, and hardware integration.",
  },
  {
    name: "IoT & Sensor Integration",
    description:
      "MQTT and CoAP protocols for connecting temperature sensors, door sensors, fuel sensors, and other IoT devices.",
  },
  {
    name: "Apache Kafka & Redis",
    description:
      "Event streaming and caching infrastructure for processing millions of location updates and events in real-time.",
  },
  {
    name: "PostGIS & TimescaleDB",
    description:
      "Geospatial and time-series databases optimized for location data storage, querying, and historical analysis.",
  },
  {
    name: "WebSocket & Push Notifications",
    description:
      "Real-time bidirectional communication for live tracking updates and instant alert delivery to all stakeholders.",
  },
  {
    name: "AWS / GCP Location Services",
    description:
      "Cloud-native geospatial services for geocoding, map rendering, and traffic data with global coverage and high availability.",
  },
];

export default function LogisticsPage() {
  return (
    <IndustryPageTemplate
      industry="Logistics"
      headline="Logistics & Fleet Applications Built for Real-World Operations"
      subheadline="We develop fleet management platforms, delivery tracking systems, route optimization solutions, and warehouse applications that keep your operations running smoothly. From real-time GPS tracking to offline-capable driver apps, we build logistics technology that works in the field."
      heroIcon={Truck}
      accentColor="blue"
      challenges={challenges}
      solutions={solutions}
      useCases={useCases}
      compliance={compliance}
      techStack={techStack}
      ctaHeadline="Ready to Optimize Your Logistics Operations?"
      ctaDescription="Let's discuss how we can help you build powerful logistics applications that improve visibility, reduce costs, and delight your customers. Our team has deep expertise in real-time tracking, route optimization, and mobile solutions for the transportation industry."
    />
  );
}
