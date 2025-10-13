// components/NavLink.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";

export type NavItem = {
    href: string;
    label: string;
    /** If true, only marks active when pathname === href. Default: false (prefix match). */
    exact?: boolean;
    /** Opens in a new tab and adds rel security attributes. */
    external?: boolean;
    /** Optional title attribute for accessibility/tooltip. */
    title?: string;
    /** Disable Next.js prefetch for this link (e.g., very heavy pages). */
    prefetch?: boolean;
};

function cn(...classes: Array<string | undefined | false | null>) {
    return classes.filter(Boolean).join(" ");
}

const RawNavLink = ({ item, onClick }: { item: NavItem; onClick?: () => void }) => {
    const pathname = usePathname();
    const isActive = item.exact
        ? pathname === item.href
        : item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

    const common = cn(
        "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-colors",
        // "hover:bg-stone-100",
         "hover:text-stone-900",
        isActive ? "bg-stone-100 text-stone-900" : "text-stone-600"
    );

    if (item.external) {
        return (
            <a
                href={item.href}
                title={item.title}
                target="_blank"
                rel="noopener noreferrer"
                className={common}
                onClick={onClick}
                aria-current={isActive ? "page" : undefined}
            >
                {item.label}
            </a>
        );
    }

    return (
        <Link
            key={item.label}
            href={item.href}
            title={item.title}
            prefetch={item.prefetch}
            className={common}
            onClick={onClick}
            aria-current={isActive ? "page" : undefined}
        >
            {item.label}
        </Link>
    );
};

export const NavLink = memo(RawNavLink);
NavLink.displayName = "NavLink";