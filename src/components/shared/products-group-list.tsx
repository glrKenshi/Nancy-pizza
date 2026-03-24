"use client";

import { useCategoryStore } from "@/store/category";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import { ProductCard } from "./product-card";
import { Title } from "./title";

/** Минимальная форма продукта для сетки карточек (совместима с моками и API). */
export interface ProductGroupItem {
  id: number;
  name: string;
  imageUrl: string;
  items: { price: number }[];
}

interface Props {
  title: string;
  items: ProductGroupItem[];
  listClassName?: string;
  categoryId: number;
  className?: string;
}

export const ProductsGroupList = ({
  title,
  items,
  listClassName,
  categoryId,
  className,
}: Props) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);

  const intersectionRef = useRef<HTMLDivElement>(null!);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.5,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [intersection?.isIntersecting, categoryId, setActiveCategoryId]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            name={product.name}
            price={product.items[0].price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};