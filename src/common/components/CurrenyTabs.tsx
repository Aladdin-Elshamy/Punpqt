"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";


export default function CurrenyTabs() {
  const [activeSort, setActiveSort] = useState<"EGP" | "USD">("EGP");

  return (
    <div
      className="inline-flex rounded-full bg-muted/80 p-1 border"
      aria-label="Cart sorting"
    >
      {["EGP","USD"].map((option) => {
        const isActive = activeSort === option;

        return (
          <button
            key={option}
            type="button"
            onClick={() => setActiveSort(option as "EGP" | "USD")}
            className={cn(
              "inline-flex h-8 items-center justify-center gap-1.5 rounded-full px-3 text-xs font-semibold text-muted-foreground transition-colors",
              isActive && "bg-primary text-white shadow-sm",
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}