"use client";

import type { Product } from "@/prisma/generated/client/client";
import { Api } from "@/services/api-client";
import { useRef, useState } from "react";
import { useClickAway, useDebounce } from "react-use";

export function useProductSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);

  useClickAway(containerRef, () => {
    setFocused(false);
  });

  useDebounce(
    () => {
      Api.products.search(searchQuery).then((items) => setProducts(items));
    },
    250,
    [searchQuery],
  );

  const clearSearch = () => setSearchQuery("");

  return {
    searchQuery,
    setSearchQuery,
    focused,
    setFocused,
    products,
    containerRef,
    clearSearch,
  };
}
