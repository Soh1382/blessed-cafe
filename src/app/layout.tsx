import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Forever Blessed Cafe | Breakfast & Coffee in Huddersfield",
  description: "Breakfast, sandwiches, fresh bean coffee & sweet treats made with love in Bradley, Huddersfield. Eat in, Takeaway, or Order Online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, playfair.variable, "font-sans bg-cream text-espresso antialiased")}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <MobileNav />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CafeOrCoffeeShop",
              "name": "Forever Blessed Cafe",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1 Brooks Yard",
                "addressLocality": "Bradley",
                "addressRegion": "Huddersfield",
                "postalCode": "HD2 1XE",
                "addressCountry": "UK"
              },
              "telephone": "07513 200565",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "13:00"
                }
              ],
              "priceRange": "£",
              "servesCuisine": "Breakfast"
            }),
          }}
        />
      </body>
    </html>
  );
}
