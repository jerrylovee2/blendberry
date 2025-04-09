"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#", label: "Menu" },
  // { href: "/#", label: "Our Story" },
  // { href: "/#", label: "Reviews" },
  { href: "tel:+17805788122", label: "Contact" }
];

export function NavLinks() {
  const pathname = usePathname();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current!);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 300);
  };

  const handleDropdownMouseEnter = () => {
    clearTimeout(timeoutRef.current!);
  };

  const handleDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 300);
  };

  return (
    <div className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <div 
          key={link.href} 
          className="relative" 
          onMouseEnter={link.label === "Menu" ? handleMouseEnter : undefined}
          onMouseLeave={link.label === "Menu" ? handleMouseLeave : undefined}
        >
          <Link
            href={link.href}
            className={cn(
              "text-base transition-colors hover:text-pink-600",
              pathname === link.href
                ? "text-pink-600 underline underline-offset-4"
                : "text-black hover:underline hover:underline-offset-4"
            )}
          >
            {link.label} {link.label === "Menu" && <span className="inline-block ml-1 text-sm"></span>}
          </Link>
          {link.label === "Menu" && isDropdownOpen && (
            <div 
              className="absolute left-0 mt-2 w-48 bg-white shadow-lg" 
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <Link href="/bubbletea" className="block px-4 py-2 text-black hover:bg-gray-200">Bubble Tea</Link>
              <Link href="/smoothies" className="block px-4 py-2 text-black hover:bg-gray-200">Smoothies</Link>
              <Link href="/milkshakes" className="block px-4 py-2 text-black hover:bg-gray-200">Milkshakes</Link>
              <Link href="/waffles" className="block px-4 py-2 text-black hover:bg-gray-200">Waffles</Link>
              <Link href="/chaihouse" className="block px-4 py-2 text-black hover:bg-gray-200">Chai House</Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
