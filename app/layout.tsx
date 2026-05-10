import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aethon Labs",
  description: "Autonomous Intelligence For The Next Era",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}