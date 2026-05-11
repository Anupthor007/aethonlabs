import "./globals.css";
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Aethon Labs - Autonomous Intelligence",
  description: "Autonomous Intelligence For The Next Era. Engineering the future with intelligent systems.",
  keywords: ["AI", "Autonomous", "Intelligence", "Systems"],
  authors: [{ name: "Anup Thorat" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Aethon Labs - Autonomous Intelligence",
    description: "Engineering the future with intelligent systems.",
    siteName: "Aethon Labs",
  },
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