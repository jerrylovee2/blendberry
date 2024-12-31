"use client";

import { Logo } from "./ui/Logo";
import { NavLinks } from "./ui/NavLinks";
import { MobileMenu } from "./ui/MobileMenu";

export function Navigation() {
  return (
    <nav className="fixed w-full bg-[#FBDEE2] backdrop-blur-md z-50 px-4 py-3 md:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <span><Logo /></span> 
        <span className="pr-[38vh]"><NavLinks /></span>
        <MobileMenu />
      </div>
    </nav>
  );
}