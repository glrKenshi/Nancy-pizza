'use client';

import { ChangeEvent, useState } from "react";
import { Input, Skeleton } from "../ui";
import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox";

type Item = FilterCheckboxProps

interface Props {
    className?: string;
    title: string;
    items: Item[];
    defaultItems?: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    loading?: boolean;
    onClickCheckbox?: (id: string) => void;
    selectedIds?: Set<string>;
    defaultValue?: string[];
}

export const CheckboxFiltersGroup = ({
    title,
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceholder = 'Поиск...',
    className,
    loading,
    onClickCheckbox,
    selectedIds,
    defaultValue,
}: Props) => {

    const [showAll, setShowAll] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const list = showAll ? items.filter(item => item.text.toLowerCase().includes(searchValue.toLowerCase())) : items.slice(0, limit);

    const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    if (loading) {
        return (
            <div className="className">
                <p className="font-bold mb-3">{title}</p>


                {...Array(limit).fill(0).map((_, index) => (
                    <Skeleton key={index} className="h-6 mb-4 rounded-[8px]" />
                ))
                }

                <Skeleton className="h-6 mb-4 w-28 rounded-[8px]" />


            </div>
        )
    }

    return (
        <div className={className}>
            <p className="font-bold mb-3">{title}</p>

            {showAll && (
                <div className="mb-5">
                    <Input
                        onChange={onChangeSearchInput}
                        value={searchValue}
                        placeholder={searchInputPlaceholder}
                        className="bg-gray-50 border-none"
                    />
                </div>
            )}

            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {list.map((item, index) => (
                    <FilterCheckbox
                        key={index}
                        text={item.text}
                        value={item.value}
                        endAdornment={item.endAdornment}
                        checked={selectedIds?.has(item.value)}
                        onCheckedChange={() => onClickCheckbox?.(item.value)}
                    />
                ))}
            </div>

            {items.length > limit && (
                <div className="border-t border-t-gray-100 mt-4">
                    <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
                        {showAll ? 'Скрыть' : "+ Показать все"}
                    </button>
                </div>
            )}
        </div>
    )
}