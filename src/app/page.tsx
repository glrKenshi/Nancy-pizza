import { Filters, ProductsGroupList, Title } from "@/components/shared";
import { Container } from "@/components/shared/container";
import { TopBar } from "@/components/shared/top-bar";
import { homeMockComboItems, homeMockPizzaItems } from "@/data/home-mock-products";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-62.5">
            <Filters />
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                categoryId={1}
                items={homeMockPizzaItems}
              />
              <ProductsGroupList
                title="Комбо"
                categoryId={2}
                items={homeMockComboItems}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
