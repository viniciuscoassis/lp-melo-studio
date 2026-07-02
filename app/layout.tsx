import type { Metadata } from "next";
import { Interactions } from "./interactions";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://melostudiodesign.com.br";
const title = "Melo Studio Design";
const description =
  "Identidade visual, sites, impressos e social media para marcas que querem destaque com um visual funcional e elegante.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  applicationName: title,
  authors: [{ name: "Melo Studio Design" }],
  creator: "Melo Studio Design",
  publisher: "Melo Studio Design",
  category: "Design Studio",
  keywords: [
    "Melo Studio Design",
    "identidade visual",
    "design de marcas",
    "branding",
    "sites",
    "social media",
    "design gráfico",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/assets/logos/melo-mark.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/apple-icon",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: title,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Melo Studio Design - Studio de design para elevar sua marca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Interactions />
      </body>
    </html>
  );
}
