import { Filters, ProductsGroupList, Title } from "@/components/shared";
import { Container } from "@/components/shared/container";
import { TopBar } from "@/components/shared/top-bar";

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
                    imageUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a75884e0939.jpg',
                    items: [
                      {
                        price: 395,
                      }
                    ]
                  },
                  {
                    id: 1,
                    name: 'Пепперони',
                    imageUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a75884e0939.jpg',
                    items: [
                      {
                        price: 395,
                      }
                    ]
                  },
                  {
                    id: 1,
                    name: 'Пепперони',
                    imageUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a75884e0939.jpg',
                    items: [
                      {
                        price: 395,
                      }
                    ]
                  },
                  {
                    id: 1,
                    name: 'Пепперони',
                    imageUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a75884e0939.jpg',
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
                    imageUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a75884e0939.jpg',
                    items: [
                      {
                        price: 395,
                      }
                    ]
                  },
                  {
                    id: 1,
                    name: 'Пепперони',
                    imageUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a75884e0939.jpg',
                    items: [
                      {
                        price: 395,
                      }
                    ]
                  },
                  {
                    id: 1,
                    name: 'Пепперони',
                    imageUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a75884e0939.jpg',
                    items: [
                      {
                        price: 395,
                      }
                    ]
                  },
                  {
                    id: 1,
                    name: 'Пепперони',
                    imageUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a75884e0939.jpg',
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
