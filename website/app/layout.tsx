import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BreadCount",
  description: "A breadboard simulation that is designed to resemble a simple base-10 adder/counter, with simulated latches and logic gates. It simulates every logical part that would go into a real life breadboard adder, like bitHalfAdder, bitFullAdder, fourBitAdder, bcdConversion, and a schema that combines these to make a cohesive 8 digit binary-coated decimal (base-10) adder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
