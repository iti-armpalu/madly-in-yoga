"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getCurrentSeason, seasonalProducts } from "@/lib/season";

export function ProductRecommendation() {
  const season = getCurrentSeason();
  const product = seasonalProducts[season];

  return (
    <Link
      href={product.href}
      aria-label={`View ${product.title}`}
      className="fixed bottom-6 right-6 z-50 group hidden sm:flex items-center gap-4 rounded-3xl bg-[rgba(255,255,255,0.7)] p-3 pr-5 shadow-lg ring-1 ring-white/40 backdrop-blur-md transition-all hover:scale-[1.02] hover:bg-white/80 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
    >
      <div className="h-20 w-20 overflow-hidden rounded-2xl bg-zinc-100">
        <Image
          src={product.image}
          alt={product.title}
          width={80}
          height={80}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col text-left">
        <h4 className="text-sm font-semibold text-zinc-900">{product.title}</h4>
        <p className="text-xs text-zinc-600">{product.subtitle}</p>
        <p className="mt-1 text-xs text-zinc-600">{product.description}</p>
      </div>

      <ChevronRight className="h-5 w-5 text-zinc-500 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
