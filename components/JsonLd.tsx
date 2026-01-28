// JSON-LD Structured Data Components for SEO

interface OrganizationJsonLdProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  email?: string;
  telephone?: string;
  address?: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
  };
  sameAs?: string[];
}

export function OrganizationJsonLd({
  name = "RenderNext",
  url = "https://rendernext.io",
  logo = "https://rendernext.io/icon-512.png",
  description = "Austin-based digital product studio specializing in React Native mobile apps, Next.js web applications, and AI solutions.",
  email = "info@rendernext.io",
  telephone = "+15123256674",
  address = {
    addressLocality: "Austin",
    addressRegion: "TX",
    addressCountry: "US",
  },
  sameAs = [],
}: OrganizationJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    description,
    email,
    telephone,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    sameAs,
    // Service offerings
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Product Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
            description: "Cross-platform mobile app development using React Native for iOS and Android",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Application Development",
            description: "Modern web applications built with Next.js, React, and TypeScript",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Solutions",
            description: "Custom AI integrations and intelligent automation solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "UI/UX Design",
            description: "User-centered design for mobile and web applications",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface WebsiteJsonLdProps {
  name?: string;
  url?: string;
  description?: string;
}

export function WebsiteJsonLd({
  name = "RenderNext",
  url = "https://rendernext.io",
  description = "Digital product studio specializing in mobile apps, web applications, and AI solutions",
}: WebsiteJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${url}/blog?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface LocalBusinessJsonLdProps {
  name?: string;
  url?: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
  };
  openingHours?: string[];
  priceRange?: string;
}

export function LocalBusinessJsonLd({
  name = "RenderNext",
  url = "https://rendernext.io",
  telephone = "+15123256674",
  email = "info@rendernext.io",
  address = {
    addressLocality: "Austin",
    addressRegion: "TX",
    addressCountry: "US",
  },
  openingHours = ["Mo-Fr 09:00-18:00"],
  priceRange = "$$$$",
}: LocalBusinessJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name,
    url,
    telephone,
    email,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    openingHoursSpecification: openingHours.map((hours) => {
      const [days, time] = hours.split(" ");
      const [opens, closes] = time.split("-");
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: days.split("-").map((d) => {
          const dayMap: Record<string, string> = {
            Mo: "Monday",
            Tu: "Tuesday",
            We: "Wednesday",
            Th: "Thursday",
            Fr: "Friday",
            Sa: "Saturday",
            Su: "Sunday",
          };
          return dayMap[d] || d;
        }),
        opens,
        closes,
      };
    }),
    priceRange,
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface BlogPostJsonLdProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  authorUrl?: string;
  image?: string;
  publisherName?: string;
  publisherLogo?: string;
}

export function BlogPostJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName,
  authorUrl,
  image,
  publisherName = "RenderNext",
  publisherLogo = "https://rendernext.io/icon-512.png",
}: BlogPostJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: authorName,
      ...(authorUrl && { url: authorUrl }),
    },
    publisher: {
      "@type": "Organization",
      name: publisherName,
      logo: {
        "@type": "ImageObject",
        url: publisherLogo,
      },
    },
    ...(image && {
      image: {
        "@type": "ImageObject",
        url: image,
      },
    }),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface FAQJsonLdProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export function FAQJsonLd({ questions }: FAQJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface BreadcrumbJsonLdProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
