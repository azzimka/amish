const serviceArea = "Lakewood, Ohio";

export const siteConfig = {
  name: "Amish Built Garages",
  tagline: "Built by Hand. Built to Last.",
  description:
    `Premium Amish-crafted garages in ${serviceArea} and surrounding areas. Custom-built with decades of tradition, quality materials, and a 10-year warranty. Get your free quote today.`,
  url: "https://www.amishbuildgarages.com",
  ogImage: "/og-image.png",
  phone: "(216) 318-2456",
  email: "info@amishbuiltgarages.com",
  businessHours: "Mon – Sat: 08:00 – 18:30",
  serviceArea,
  social: {
    facebook: "#",
    instagram: "#",
  },
  keywords: [
    "amish built garages",
    "custom garages lakewood ohio",
    "garage builders near me",
    "amish garage construction",
    "detached garage lakewood ohio",
    "garage builder lakewood ohio",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
