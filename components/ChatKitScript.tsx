"use client";

import Script from "next/script";

export default function ChatKitScript() {
  return (
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
  );
}
