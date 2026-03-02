import "./css/style.css";

import { Inter, Inter_Tight } from "next/font/google";
import Theme from "./theme-provider";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import JsonLd from "@/components/ui/json-ld";
import { generatePersonSchema, generateWebSiteSchema } from "@/lib/structured-data";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const inter_tight = Inter_Tight({
  weight: ["600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

// Code de vérification Google Search Console
export const metadata: Metadata = {
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personSchema = generatePersonSchema();
  const webSiteSchema = generateWebSiteSchema();

  return (
    <html lang="en" suppressHydrationWarning>
      {/* suppressHydrationWarning: https://github.com/vercel/next.js/issues/44343 */}
      <body
        className={`${inter.variable} ${inter_tight.variable} font-inter antialiased bg-blue-50 text-gray-800 dark:bg-gray-950 dark:text-gray-100 tracking-tight`}
      >
        <JsonLd data={[personSchema, webSiteSchema]} id="json-ld-global" />
        <Theme>
          <div className="overflow-hidden supports-[overflow:clip]:overflow-clip">
            <div className="max-w-[1000px] mx-auto">
              <div className="w-full bg-blue-50 dark:bg-gray-900 box-content">
                <div className="px-3 md:px-16">
                  <div className="flex flex-col min-h-screen">
                    <Header />

                    <main className="grow py-12 space-y-12">{children}</main>

                    <Footer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Theme>
      </body>
    </html>
  );
}
