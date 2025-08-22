"use client"
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import Navbar from "./components/Nabvar";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 text-gray-900">
        <SessionProvider>
          {/* Navbar সব পেজে দেখাবে */}
          <Navbar />
          
          <main className="min-h-screen">{children}</main>
          
          {/* Footer সব পেজে দেখাবে */}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
