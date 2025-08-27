import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingIndicator from "@/components/LoadingIndicator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://next-js-azure-gamma.vercel.app/"),
  title: "MaxDev",
  description:
    "Головна сторінка, візуалізує різні можливості як клієнських компонентів так і серверних.",
  openGraph: {
    title: "MaxDev - Головна сторінка",
    description:
      "Головна сторінка, візуалізує різні можливості як клієнських компонентів так і серверних.",
    images: ["/img/home.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ua">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col justify-between`}
      >
        <header>
          <Navbar />
        </header>

        <main className="flex-grow">
          <LoadingIndicator />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
