"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/#", label: "Our Story" },
  { href: "/#", label: "Reviews" },
  { href: "/#", label: "Contact" },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-base transition-colors hover:text-pink-600",
            pathname === link.href
              ? "text-pink-600 underline underline-offset-4"
              : "text-gray-700 hover:underline hover:underline-offset-4"
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
