import { useEffect, useState } from "react"
import { useSet } from "react-use";
import qs from "qs";
import { useRouter, useSearchParams } from "next/navigation";

interface IUseFilterCatalog {
    selectedIngredients: Set<string>;
    onAddId: (id: string) => void;
    toggleSizes: (size: string) => void;
    sizes: Set<string>;
    pizzaTypes: Set<string>;
    togglePizzaTypes: (pizzaType: string) => void;
    prices: PriceProps;
    setPrices: (prices: PriceProps) => void;
    updatePrice: (name: keyof PriceProps, value: number) => void;
}

interface PriceProps {
    priceFrom?: number;
    priceTo?: number;
}

export const useFilterCatalog = (): IUseFilterCatalog => {

    const searchParams = useSearchParams()
    const router = useRouter()

    const [selectedIngredients, { toggle }] = useSet(new Set<string>([]))
    const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]))
    const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>([]))

    const [prices, setPrices] = useState<PriceProps>({
        priceFrom: Number(searchParams.get('priceFrom')) || undefined,
        priceTo: Number(searchParams.get('priceTo')) || undefined,
    })

    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrices({
            ...prices,
            [name]: value,
        })
    }

    useEffect(() => {
        const filters = {
            ...prices,
            pizzaTypes: Array.from(pizzaTypes),
            sizes: Array.from(sizes),
            ingredients: Array.from(selectedIngredients),
        }

        const queryString = qs.stringify(filters, { arrayFormat: 'repeat' })

        router.push(`?${queryString}`, {
            scroll: false,
        })

    }, [prices, pizzaTypes, sizes, selectedIngredients])


    return { selectedIngredients, onAddId: toggle, toggleSizes, sizes, togglePizzaTypes, pizzaTypes, prices, setPrices, updatePrice }
}
