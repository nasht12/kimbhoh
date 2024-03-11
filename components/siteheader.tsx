import Link from "next/link"
import { cn } from "@/lib/utils"
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 mx-4 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
          </div>
          <nav className="flex items-center">
            AB
          </nav>
        </div>
      </div>
    </header>
  );
}
