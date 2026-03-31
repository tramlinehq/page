"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const NAV_LINKS = [
  { label: "Why?", href: "/why" },
  { label: "Integrations", href: "/integrations" },
  { label: "Blog", href: "/blog" },
  { label: "Customers", href: "/customers" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "https://docs.tramline.app", external: true },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img
            src="https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/664b1cab1ff8110289c4ba8e_tramline-vector-logo.svg"
            alt="Tramline"
            className="h-9"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-stretch gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = !link.external && pathname.startsWith(link.href);
            const baseClasses = "text-sm transition-colors flex items-center border-b-2 -mb-px";
            return link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${baseClasses} text-muted-foreground hover:text-foreground border-transparent`}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`${baseClasses} ${
                  isActive
                    ? "text-foreground border-foreground"
                    : "text-muted-foreground hover:text-foreground border-transparent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop auth */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://tramline.dev/email/sign_in"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Sign in
          </a>
          <Button render={<a href="https://tramline.dev/email/sign_up" />} size="sm" className="rounded-[7px]">
            Sign up now
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon" className="md:hidden" />
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            <span className="sr-only">Menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px]">
            <SheetHeader>
              <SheetTitle>
                <img
                  src="https://cdn.prod.website-files.com/6644e5e860f656524d6f243e/664b1cab1ff8110289c4ba8e_tramline-vector-logo.svg"
                  alt="Tramline"
                  className="h-6"
                />
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-6 px-4">
              {NAV_LINKS.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm ${
                      pathname.startsWith(link.href)
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Separator />
              <a
                href="https://tramline.dev/email/sign_in"
                className="text-sm text-muted-foreground"
              >
                Sign in
              </a>
              <Button render={<a href="https://tramline.dev/email/sign_up" />} className="rounded-[7px]">
                Sign up now
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
