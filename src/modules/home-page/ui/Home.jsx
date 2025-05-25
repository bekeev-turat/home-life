import { useGetHomeProductQuery, PromotionData, ProductData } from "../api";
import { Space } from "../../../shared/components/ui/Space/Space";
import { ProductList } from "../../Product-components/ProductList/ui/ProductList";
import { ProductOfTheDay } from "../../product-of-the-day";

export function Home() {
  const { data, isLoading, error } = useGetHomeProductQuery();

  console.log(data, isLoading, error);

  return (
    <>
      <ProductOfTheDay />

      <Space h={80} />

      <ProductList data={ProductData} title={"Новинки"} />

      <Space h={60} />

      <ProductList data={ProductData} title={"Популярные"} />

      <Space h={60} />

      <ProductList data={PromotionData} title={"Акции"} />

      <Space h={70} />
    </>
  );
}
