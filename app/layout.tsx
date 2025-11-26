import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";

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
      <head>
        <Script
          src="https://cdn.platform.openai.com/deployments/chatkit/chatkit.js"
          strategy="afterInteractive"
          onLoad={() => {
            if (typeof window !== "undefined") {
              window.dispatchEvent(new Event("chatkit-script-loaded"));
            }
          }}
          onError={(e) => {
            if (typeof window !== "undefined") {
              window.dispatchEvent(
                new CustomEvent("chatkit-script-error", {
                  detail: (e as ErrorEvent)?.message ?? String(e),
                })
              );
            }
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
