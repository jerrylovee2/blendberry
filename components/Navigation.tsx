"use client";

import { Logo } from "./ui/Logo";
import { NavLinks } from "./ui/NavLinks";
import { MobileMenu } from "./ui/MobileMenu";

export function Navigation() {
  return (
    <nav className="fixed w-full bg-gradient-to-r from-[#BD4555] to-[#372426] backdrop-blur-md z-50 px-4 py-3 md:px-6">
      <div className="w-full md:max-w-7xl mx-auto flex items-center justify-between">
        <span><Logo /></span> 
        <span className="hidden md:block pr-[38vh]"><NavLinks /></span>
        <span className="block md:hidden"><MobileMenu /></span>
      </div>
    </nav>
  );
}