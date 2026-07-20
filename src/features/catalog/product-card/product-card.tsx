import Link from "next/link";
import Image from "next/image";
import { Title } from "@/features/layout";
import { Button } from "@/components/ui";
import { Plus } from "lucide-react";

interface Props {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    className?: string;
}

export const ProductCard = ({ id, name, price, imageUrl, className }: Props) => {
    return (
        <div className={className}>
            <Link href={`/product/${id}`}>
                <div className="relative flex justify-center p-6 bg-amber-50/80 rounded-lg h-[260px]">
                    <Image
                        src={imageUrl}
                        alt={name}
                        width={215}
                        height={215}
                        className="h-[215px] w-[215px] object-contain"
                        sizes="215px"
                    />
                </div>

                <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

                <p className="text-sm text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sit porro nisi voluptatem eius dolores vitae assumenda quaerat consequatur officia quas pariatur molestias aliquam distinctio asperiores, voluptatum eveniet molestiae facere?
                </p>

                <div className="flex justify-between items-center mt-4">
                    <span className="text-[20px]">
                        от <b>{price} ₽</b>
                    </span>

                    <Button variant="secondary" className="text-base font-bold">
                        <Plus size={20} className="mr-1" />
                        Добавить
                    </Button>
                </div>
            </Link>
        </div>
    );
}
