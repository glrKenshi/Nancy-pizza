"use client";

import { useProductSearch } from "@/hooks/useProductSearch";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import Link from "next/link";

interface Props {
  className?: string;
}

export const SearchInput = ({ className }: Props) => {
  const {
    searchQuery,
    setSearchQuery,
    focused,
    setFocused,
    products,
    containerRef,
    clearSearch,
  } = useProductSearch();

  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />
      )}

      <div
        ref={containerRef}
        className={cn(
          "flex rounded-2xl flex-1 justify-between relative h-11 z-30",
          className,
        )}
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          type="text"
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
          placeholder="Найти пиццу..."
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div
          className={cn(
            "absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
            focused && "visible opacity-100 top-12",
          )}
        >
          {products.map((product) => (
            <Link
              onClick={clearSearch}
              key={product.id}
              className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10"
              href={`/product/${product.id}`}
            >
              <img
                className="rounded-sm h-8 w-8"
                src={product.imageUrl}
                alt={product.name}
              />
              <span>{product.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};