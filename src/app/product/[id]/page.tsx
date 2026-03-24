'use client'

import { useParams } from "next/navigation"

export default function ProductPage() {
    const { id } = useParams<{ id: string }>()

    return (
        <p>Product {id}</p>
    )
}  