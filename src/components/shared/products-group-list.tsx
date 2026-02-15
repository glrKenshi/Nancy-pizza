'use client';
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { ProductCard } from "./product-card";
import { useIntersection } from 'react-use';
import { useEffect, useRef } from "react";
import { useCategoryStore } from "@/store/category";

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

    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)

    const intersectionRef = useRef<HTMLDivElement>(null!)
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.5,
    })

    useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId)
        }
    }, [intersection?.isIntersecting, categoryId, setActiveCategoryId])

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