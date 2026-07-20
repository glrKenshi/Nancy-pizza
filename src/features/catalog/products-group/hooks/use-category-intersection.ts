'use client'

import { useCategoryStore } from "@/store/category"
import { useIntersection } from 'react-use'
import { useEffect, useRef } from "react"

export function useCategoryIntersection(categoryId: number) {
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

    return { intersectionRef }
}
