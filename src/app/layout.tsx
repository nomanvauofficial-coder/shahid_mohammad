import type { Metadata } from "next";
import { Poppins, Roboto, Red_Hat_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shahid Mohammad | Local SEO Specialist",
  description:
    "I help service-based businesses worldwide become the most trusted choice on Google and AI search. AI-driven Local SEO Specialist based in Chattogram, Bangladesh.",
  keywords: [
    "SEO",
    "Local SEO",
    "Shahid Mohammad",
    "Google Ranking",
    "AI Search Optimization",
    "Chattogram",
    "Bangladesh",
  ],
  authors: [{ name: "Shahid Mohammad" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Shahid Mohammad | Local SEO Specialist",
    description:
      "I help service-based businesses worldwide become the most trusted choice on Google and AI search.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${poppins.variable} ${roboto.variable} ${redHatDisplay.variable} antialiased bg-white text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
