"use client";  // Add this at the very top

import { useState } from "react";
import "./globals.css";
import Navebar from "@/components/Navebar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// Your font imports and other logic

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [headerVisible, setHeaderVisible] = useState(true);

  const handleHeaderClose = () => {
    setHeaderVisible(false); // Hide the header when it's closed
  };

  return (
    <html lang="en">
      <body>
        <div className={headerVisible ? "pt-16" : "pt-0"}> {/* Adjust padding */}
          <Header onClose={handleHeaderClose} />
          <Navebar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
