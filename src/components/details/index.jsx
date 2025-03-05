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
    <div className="bg-gray-100 p-5 rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
        Основные характеристики
      </h2>
      <ul className="divide-y divide-gray-300">
        {product.product_name && (
          <SpecItem label="Название продукта" value={product.product_name} />
        )}
        {product.storage && (
          <SpecItem label="Объем памяти" value={product.storage} />
        )}
        {product.color && <SpecItem label="Цвет" value={product.color} />}
        {product.price_current && (
          <SpecItem
            label="Текущая цена"
            value={formatPrice(product.price_current)}
          />
        )}
        {product.price_original && (
          <SpecItem
            label="Оригинальная цена"
            value={formatPrice(product.price_original)}
          />
        )}
        {product.discount && (
          <SpecItem label="Скидка" value={`${product.discount}%`} />
        )}
        <SpecItem
          label="Наличие"
          value={product.availability_in_stock ? "В наличии" : "Нет"}
        />
        {product.delivery_time && (
          <SpecItem label="Доставка" value={product.delivery_time} />
        )}
        {product.region && <SpecItem label="Регион" value={product.region} />}
        {product.processor && (
          <SpecItem label="Процессор" value={product.processor} />
        )}
        {product.display_size && (
          <SpecItem label="Диагональ экрана" value={product.display_size} />
        )}
        {product.display_type && (
          <SpecItem label="Тип дисплея" value={product.display_type} />
        )}
        {product.body_material && (
          <SpecItem label="Материал корпуса" value={product.body_material} />
        )}
        {product.water_resistance && (
          <SpecItem label="Водозащита" value={product.water_resistance} />
        )}
        {product.weight && (
          <SpecItem label="Вес" value={`${product.weight} г`} />
        )}
        {product.camera_telephoto && (
          <SpecItem label="Камера телефото" value={product.camera_telephoto} />
        )}
        {product.camera_wide && (
          <SpecItem label="Камера широкоугольная" value={product.camera_wide} />
        )}
        {product.camera_ultra_wide && (
          <SpecItem
            label="Камера сверхширокая"
            value={product.camera_ultra_wide}
          />
        )}
        {product.battery_type && (
          <SpecItem label="Тип аккумулятора" value={product.battery_type} />
        )}
        {product.battery_music_playback && (
          <SpecItem
            label="Время работы (музыка)"
            value={product.battery_music_playback}
          />
        )}
        {product.battery_features && (
          <SpecItem
            label="Функции батареи"
            value={formatArray(product.battery_features)}
          />
        )}
        <SpecItem
          label="Разъем для наушников"
          value={product.headphone_jack ? "Есть" : "Нет"}
        />
        {product.charging_port && (
          <SpecItem label="Порт зарядки" value={product.charging_port} />
        )}
        {product.cpu_cores && (
          <SpecItem label="Ядра процессора" value={product.cpu_cores} />
        )}
        {product.ratings_stars && product.ratings_reviews_count && (
          <SpecItem
            label="Рейтинг"
            value={`${product.ratings_stars} из 5 (${product.ratings_reviews_count} отзывов)`}
          />
        )}
        {product.color_options && (
          <SpecItem
            label="Доступные цвета"
            value={formatArray(product.color_options)}
          />
        )}
      </ul>
    </div>
  );
};

const SpecItem = ({ label, value }) => (
  <li className="flex justify-between py-2 px-3 text-gray-700 text-sm bg-gray-100 border-b">
    <span className="font-medium">{label}</span>
    <span>{value}</span>
  </li>
);

const LoadingState = () => (
  <div className="text-center py-5 text-gray-600 text-sm">Загрузка...</div>
);

const ErrorState = ({ message }) => (
  <div className="text-center py-5 text-red-500 text-sm">{message}</div>
);

const formatPrice = (price) =>
  price ? `${price.toLocaleString()} UZS` : "Нет данных";

const formatArray = (arr) => (arr?.length ? arr.join(", ") : "Нет данных");

export default ProductDetails;
