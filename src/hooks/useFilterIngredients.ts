import { Ingredient } from "@/prisma/generated/client/client";
import { Api } from "@/services/api-client";
import { useEffect, useState } from "react";
import { useSet } from "react-use";

export interface UseFilterIngredientsResult {
  ingredients: Ingredient[];
  loading: boolean;
  selectedIds: Set<string>;
  onAddId: (id: string) => void;
}

export function useFilterIngredients(): UseFilterIngredientsResult {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIds, { toggle }] = useSet(new Set<string>());

  useEffect(() => {
    setLoading(true);

    Api.ingredients
      .getAll()
      .then((items) => {
        setIngredients(items);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  const onAddId = (id: string) => {
    toggle(id);
  };

  return { ingredients, loading, selectedIds, onAddId };
}