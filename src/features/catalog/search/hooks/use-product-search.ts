'use client'

import { Product } from "@/prisma/generated/client/client"
import { Api } from "@/services/api-client"
import { useRef, useState } from "react"
import { useClickAway, useDebounce } from "react-use"

export function useProductSearch() {
    const [searchQuery, setSearchQuery] = useState('')
    const [focused, setFocused] = useState(false)
    const [products, setProducts] = useState<Product[]>([])

    const ref = useRef(null)

    const onCleanSearchQuery = () => {
        setSearchQuery("")
    }

    useClickAway(ref, () => {
        setFocused(false);
    })

    useDebounce(() => {
        Api.products.search(searchQuery).then(items => setProducts(items))
    },
        250,
        [searchQuery]
    )

    return {
        searchQuery,
        setSearchQuery,
        focused,
        setFocused,
        products,
        ref,
        onCleanSearchQuery,
    }
}
