import { Filters, ProductsGroupList, TopBar } from "@/features/catalog";
import { Container, Title } from "@/features/layout";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text='Все пиццы' size='lg' className='font-extrabold' />
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
                items={[
                  {
                    id: 1,
                    name: 'Пепперони',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/019afab403ed7001a6263185d978f3f5.avif',
                    items: [
                      {
                        price: 395,
                      }
                    ]
                  },
                  {
                    id: 1,
                    name: 'Пепперони',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/019afab403ed7001a6263185d978f3f5.avif',
                    items: [
                      {
                        price: 395,
                      }
                    ]
                  },
                  {
                    id: 1,
                    name: 'Пепперони',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/019afab403ed7001a6263185d978f3f5.avif',
                    items: [
                      {
                        price: 395,
                      }
                    ]
                  },
                  {
                    id: 1,
                    name: 'Пепперони',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/019afab403ed7001a6263185d978f3f5.avif',
                    items: [
                      {
                        price: 395,
                      }
                    ]
                  },
                ]}
              />
              <ProductsGroupList
                title="Комбо"
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: 'Пепперони',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/019afab403ed7001a6263185d978f3f5.avif',
                    items: [
                      {
                        price: 395,
                      }
                    ]
                  },
                  {
                    id: 1,
                    name: 'Пепперони',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/019afab403ed7001a6263185d978f3f5.avif',
                    items: [
                      {
                        price: 395,
                      }
                    ]
                  },
                  {
                    id: 1,
                    name: 'Пепперони',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/019afab403ed7001a6263185d978f3f5.avif',
                    items: [
                      {
                        price: 395,
                      }
                    ]
                  },
                  {
                    id: 1,
                    name: 'Пепперони',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/019afab403ed7001a6263185d978f3f5.avif',
                    items: [
                      {
                        price: 395,
                      }
                    ]
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
