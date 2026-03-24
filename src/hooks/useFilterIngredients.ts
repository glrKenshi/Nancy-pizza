import { Ingredient } from "@/prisma/generated/client/client"
import { Api } from "@/services/api-client"
import { useEffect, useState } from "react"
import { useSet } from "react-use";


interface IUseFilterIngredients {
    ingredients: Ingredient[];
    loading: boolean;
}

export const useFilterIngredients = (): IUseFilterIngredients => {

    const [ingredients, setIngredients] = useState<Ingredient[]>([])
    const [loading, setLoading] = useState(true)

    const [set, { toggle }] = useSet(new Set<string>([]))

    useEffect(() => {
        setLoading(true)

        Api.ingredients.getAll().then(items => {
            setIngredients(items)
        }).catch((e) => console.log(e))
            .finally(() => setLoading(false))

    }, [])

    return { ingredients, loading }
}