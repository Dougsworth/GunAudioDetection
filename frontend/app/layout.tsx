import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./components/Navbar"; // Navbar import
import "./globals.css";

// Load custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the website
export const metadata: Metadata = {
  title: "GunDetection Audio",
  description: "Stay safe with real-time gunshot detection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white`}
      >
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="min-h-screen flex flex-col">{children}</main>

        {/* Footer */}
        {/* <footer className="mt-auto text-gray-500 text-center py-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} GunDetection Audio. All rights
            reserved.
          </p>
        </footer> */}
      </body>
    </html>
  );
}
