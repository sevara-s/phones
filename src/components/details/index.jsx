import React from "react";
import { useParams } from "react-router-dom";
import { useProductData } from "../../hooks/useProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: phones, isLoading, isError } = useProductData();

  if (isLoading) return <LoadingState />;
  if (isError || !phones?.length)
    return <ErrorState message="Ошибка загрузки данных" />;

  const product = phones.find((phone) => phone.id === id);
  if (!product) return <ErrorState message="Товар не найден" />;

  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Основные характеристики</h2>
      <ul>{renderSpecs(product)}</ul>
    </div>
  );
};

const LoadingState = () => (
  <div className="text-center py-5 text-gray-500">Загрузка...</div>
);

const ErrorState = ({ message }) => (
  <div className="text-center py-5 text-red-500">{message}</div>
);

const renderSpecs = (product) => {
  const specs = [
    { label: "Название продукта", value: product.product_name },
    { label: "Объем встроенной памяти", value: product.storage },
    { label: "Цвет", value: product.color },
    { label: "Текущая цена", value: formatPrice(product.price_current) },
    { label: "Оригинальная цена", value: formatPrice(product.price_original) },
    {
      label: "Скидка",
      value: product.discount ? `${product.discount}%` : "Нет",
    },
    {
      label: "Наличие на складе",
      value: product.availability_in_stock ? "В наличии" : "Нет в наличии",
    },
    { label: "Время доставки", value: product.delivery_time },
    { label: "Регион", value: product.region },
    { label: "Процессор", value: product.processor },
    { label: "Диагональ дисплея", value: product.display_size },
    { label: "Тип дисплея", value: product.display_type },
    { label: "Материал корпуса", value: product.body_material },
    { label: "Водозащита", value: product.water_resistance || "Нет данных" },
    {
      label: "Вес",
      value: product.weight ? `${product.weight} г` : "Нет данных",
    },
    {
      label: "Камера телефото",
      value: product.camera_telephoto || "Нет данных",
    },
    {
      label: "Камера широкоугольная",
      value: product.camera_wide || "Нет данных",
    },
    {
      label: "Камера сверхширокоугольная",
      value: product.camera_ultra_wide || "Нет данных",
    },
    { label: "Тип аккумулятора", value: product.battery_type },
    {
      label: "Время работы при воспроизведении музыки",
      value: product.battery_music_playback || "Нет данных",
    },
    {
      label: "Функции аккумулятора",
      value: formatArray(product.battery_features),
    },
    {
      label: "Разъем для наушников",
      value: product.headphone_jack ? "Есть" : "Нет",
    },
    { label: "Порт зарядки", value: product.charging_port },
    { label: "Количество ядер", value: product.cpu_cores },
    {
      label: "Рейтинг",
      value: `${product.ratings_stars} из 5 (${product.ratings_reviews_count} отзывов)`,
    },
    { label: "Доступные цвета", value: formatArray(product.color_options) },
  ];

  return specs.map((spec, index) => (
    <li
      key={index}
      className="flex justify-between py-2 border-b last:border-b-0 border-dotted border-gray-300"
    >
      <span className="text-gray-500">{spec.label}</span>
      <span className="font-medium text-black">{spec.value}</span>
    </li>
  ));
};

const formatPrice = (price) =>
  price ? `${price.toLocaleString()} UZS` : "Нет данных";

const formatArray = (arr) => (arr?.length ? arr.join(", ") : "Нет данных");

export default ProductDetails;
