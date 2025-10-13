// components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { NavLink, type NavItem } from "./nav-link";

export type HeaderProps = {
    brand?: { href?: string; label?: string };
    nav: NavItem[];
    rightSlot?: React.ReactNode;
    className?: string;
};

function cn(...classes: Array<string | undefined | false | null>) {
    return classes.filter(Boolean).join(" ");
}

export function Header({
    brand = { href: "/", label: "Brand" },
    nav,
    rightSlot,
    className,
}: HeaderProps) {
    const [open, setOpen] = useState(false);

    return (
        <header
            className={cn(
                // "sticky top-0 z-50",
                "w-full bg-transparent backdrop-blur-none", // transparent
                "transition-colors duration-300",
                className
            )}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Brand */}
                    <Link href={brand.href ?? "/"} className="text-base font-semibold text-zinc-900">
                        {/* {brand.label} */}

                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center">
                                <svg viewBox="0 0 40 40" fill="none" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="1.5" fill="currentColor" />
                                    {Array.from({ length: 12 }).map((_, i) => {
                                        const angle = (i * 30 * Math.PI) / 180
                                        const x1 = 20 + Math.cos(angle) * 4
                                        const y1 = 20 + Math.sin(angle) * 4
                                        const x2 = 20 + Math.cos(angle) * 18
                                        const y2 = 20 + Math.sin(angle) * 18
                                        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.5" />
                                    })}
                                </svg>
                            </div>
                            <span className="text-lg font-medium text-foreground">{brand.label}</span>
                        </div>
                    </Link>



                    {/* Nav (desktop) */}
                    <nav className="hidden md:flex gap-1">
                        {nav.map((item) => (
                            <NavLink key={item.href} item={item} />
                        ))}
                    </nav>

                    {/* Right slot */}
                    <div className="hidden md:flex items-center gap-2">{rightSlot}</div>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        className="md:hidden rounded-xl p-2 text-zinc-700 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-zinc-400"
                    >
                        <span className="sr-only">Toggle menu</span>
                        <svg
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            {open ? (
                                <>
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </>
                            ) : (
                                <>
                                    <line x1="3" y1="12" x2="21" y2="12" />
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <line x1="3" y1="18" x2="21" y2="18" />
                                </>
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <nav className="md:hidden bg-white/30 backdrop-blur-sm">
                    <ul className="px-4 pb-4 space-y-1">
                        {nav.map((item) => (
                            <li key={item.href}>
                                <NavLink item={item} onClick={() => setOpen(false)} />
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}
