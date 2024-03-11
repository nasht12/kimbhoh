"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link
        href="/"
        className="mr-6 flex items-center space-x-2 hover:no-underline"
      >
        {/* <Icons.logo className="h-6 w-6" /> */}
        <span className="hidden font-bold sm:inline-block text-black">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        <Link
          href="/docs"
          className={cn(
            "transition-colors hover:text-foreground/80 hover:no-underline",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          <span className="text-black">World</span>
        </Link>
        <Link
          href="/docs/components"
          className={cn(
            "transition-colors hover:text-foreground/80 hover:no-underline",
            pathname?.startsWith("/docs/components")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          <span className="text-black">Business</span>
        </Link>
        <Link
          href="/themes"
          className={cn(
            "transition-colors hover:text-foreground/80 hover:no-underline",
            pathname?.startsWith("/themes")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          <span className="text-black">Politics</span>
        </Link>
        <Link
          href="/examples"
          className={cn(
            "transition-colors hover:text-foreground/80 hover:no-underline",
            pathname?.startsWith("/examples")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          <span className="text-black">Entertaiment</span>
        </Link>
        <Link
          href={siteConfig.links.github}
          className={cn(
            "text-foreground/60 transition-colors hover:text-foreground/80 hover:no-underline"
          )}
        >
          <span className="text-black">Sports</span>
        </Link>
      </nav>
    </div>
  );
}
