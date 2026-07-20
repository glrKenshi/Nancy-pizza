'use client';
import { cn } from "@/lib/utils";
import { Title } from "@/features/layout";
import { ProductCard } from "../product-card";
import { useCategoryIntersection } from "./hooks/use-category-intersection";

interface Props {
    title: string;
    items: any[];
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

    const { intersectionRef } = useCategoryIntersection(categoryId)

    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size="lg" className="font-extrabold mb-5" />

            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {items.map((product, id) => (
                    <ProductCard
                        key={id}
                        id={product.id}
                        name={product.name}
                        price={product.items[0].price}
                        imageUrl={product.imageUrl}
                    />
                ))}
            </div>
        </div>
    )
}
