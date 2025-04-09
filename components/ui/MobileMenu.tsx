"use client";

import { Menu } from "lucide-react";
import { Button } from "./button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/", label: "Menu", submenu: [
      { href: "/bubbletea", label: "Bubble Tea" },
      { href: "/smoothies", label: "Smoothies" },
      { href: "/milkshakes", label: "Milkshakes" },
      { href: "/waffles", label: "Waffles" },
      { href: "/chaihouse", label: "Chai House" },
    ] 
  },
  // { href: "/our-story", label: "Our Story" },
  // { href: "/reviews", label: "Reviews" },
  { href: "tel:+17805788122", label: "Contact" }

];

export function MobileMenu() {
  const pathname = usePathname();
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-6">
          {links.map((link) => (
            <div key={link.href} className="relative">
              <Link
                href={link.href}
                className={`${
                  pathname === link.href ? "text-pink-600" : "text-gray-700"
                } hover:text-pink-500 transition-colors`}
                onClick={link.submenu ? () => setSubMenuOpen(!isSubMenuOpen) : undefined}
              >
                {link.label}
              </Link>
              {link.submenu && isSubMenuOpen && (
                <div className="flex flex-col mt-2 bg-cream-100 rounded shadow-lg">
                  {link.submenu.map((subLink) => (
                    <Link
                      key={subLink.href}
                      href={subLink.href}
                      className="block px-4 py-2 text-gray-600 hover:bg-cream-200"
                    >
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}