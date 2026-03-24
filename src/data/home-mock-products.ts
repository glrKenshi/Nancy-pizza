/** Временные мок-данные для главной (как в исходной page.tsx). */
const MOCK_IMAGE_URL =
  "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a75884e0939.jpg";

const mockPepperoniProduct = {
  id: 1,
  name: "Пепперони",
  imageUrl: MOCK_IMAGE_URL,
  items: [{ price: 395 }],
};

export const homeMockPizzaItems = Array.from({ length: 4 }, () => ({
  ...mockPepperoniProduct,
}));

export const homeMockComboItems = Array.from({ length: 4 }, () => ({
  ...mockPepperoniProduct,
}));
