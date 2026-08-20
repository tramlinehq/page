"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const DISMISS_KEY = "tramline-wind-down-banner-dismissed";
const SPONSOR_URL = "https://github.com/sponsors/tramlinehq";

export function WindDownBanner() {
  const [dismissed, setDismissed] = useState<boolean | null>(null);

  useEffect(() => {
    setDismissed(window.localStorage.getItem(DISMISS_KEY) === "true");
  }, []);

  function dismiss() {
    window.localStorage.setItem(DISMISS_KEY, "true");
    setDismissed(true);
  }

  // null = not yet hydrated; avoids a flash of the banner for people who dismissed it
  if (dismissed !== false) return null;

  return (
    <aside className="bg-cream border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 py-6 relative">
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss"
          className="absolute top-4 right-4 text-dark-green/40 hover:text-dark-green transition-colors"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="max-w-2xl md:pr-10">
          <h4 className="text-dark-green mb-2">Tramline is still here ❤️</h4>
          <p className="text-sm md:text-[15px] leading-relaxed text-dark-green/75">
            We&rsquo;ve decided to wind down Tramline as a business, but
            we&rsquo;re keeping the service running as a free, open-source
            project. It&rsquo;s now supported by people who use and believe in
            Tramline. If it&rsquo;s been useful to you, you can help keep it
            running by becoming a sponsor.
          </p>
          <Button
            render={
              <a href={SPONSOR_URL} target="_blank" rel="noopener noreferrer" />
            }
            size="lg"
            className="rounded-[7px] mt-4"
          >
            Support Tramline
          </Button>
        </div>
      </div>
    </aside>
  );
}
