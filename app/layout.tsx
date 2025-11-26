import type { Metadata } from "next";
import "./globals.css";
import ChatKitScript from "@/components/ChatKitScript";

export const metadata: Metadata = {
  title: "AgentKit demo",
  description: "Demo of ChatKit with hosted workflow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className="antialiased">
        <ChatKitScript />
        {children}
      </body>
    </html>
  );
}
