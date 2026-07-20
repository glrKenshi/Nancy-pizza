import { Ingredient } from "@/prisma/generated/client/client"
import { Api } from "@/services/api-client"
import { useEffect, useState } from "react"


interface IUseRenderIngredients {
    ingredients: Ingredient[];
    loading: boolean;

}

export const useRenderFilters = (): IUseRenderIngredients => {

    const [ingredients, setIngredients] = useState<Ingredient[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        Api.ingredients.getAll().then(items => {
            setLoading(true)
            setIngredients(items)
        }).catch((e) => console.log(e))
            .finally(() => setLoading(false))

    }, [])

    return { ingredients, loading }
}
