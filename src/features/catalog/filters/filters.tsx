'use client'

import { Title } from "@/features/layout";
import { Input, RangeSlider } from "@/components/ui";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useRenderFilters } from "./hooks/use-render-filters";
import { useFilterCatalog } from "./hooks/use-filter-catalog";

interface Props {
    className?: 'string';
}



export const Filters = ({ className }: Props) => {
    const { ingredients, loading } = useRenderFilters()
    const { onAddId, selectedIngredients, toggleSizes, sizes, togglePizzaTypes, pizzaTypes, prices, setPrices, updatePrice } = useFilterCatalog()

    const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }))

    return (
        <div className={className}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

            <CheckboxFiltersGroup
                title="Тип теста"
                selectedValues={pizzaTypes}
                className="mb-5"
                onClickCheckbox={togglePizzaTypes}
                items={[
                    { text: 'Тонкое', value: '1' },
                    { text: 'Традиционное', value: '2' },
                ]}
            />

            <CheckboxFiltersGroup
                title="Размеры"
                selectedValues={sizes}
                className="mb-5"
                onClickCheckbox={toggleSizes}
                items={[
                    { text: '20 см', value: '20' },
                    { text: '30 см', value: '30' },
                    { text: '40 см', value: '40' },
                ]}
            />

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0} max={1000} value={String(prices.priceFrom)} onChange={(e) => updatePrice('priceFrom', Number(e.target.value))} />
                    <Input type="number" placeholder="1000" min={500} max={1000} value={String(prices.priceTo)} onChange={(e) => updatePrice('priceTo', Number(e.target.value))} />
                </div>

                <RangeSlider min={0} max={5000} step={10} value={[prices.priceFrom || 0, prices.priceTo || 1000]} onValueChange={([priceFrom, priceTo]) => setPrices({ priceFrom, priceTo })} />
            </div>

            <CheckboxFiltersGroup
                title="Ингридиенты"
                className="mt-5" limit={6}
                defaultItems={items.slice(0, 6)}
                items={items}
                loading={loading}
                onClickCheckbox={onAddId}
                selectedValues={selectedIngredients}
            />
        </div>

    )
}
