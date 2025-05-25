import { Title } from "../../../../shared/components/ui/Text";
import { ProductCard } from "../../ProductCard/ui/ProductCard";
import s from "./ProductList.module.scss";

export function ProductList({ title, data }) {
  return (
    <div className={s.container}>
      <Title className={s.title} size="xl-36">
        {title}
      </Title>
      <div className={s.content}>
        {data.map((el) => (
          <ProductCard
            key={el.id}
            img={el.img}
            title={el.title}
            oldPrice={el.oldPrice}
            price={el.price}
            promotion={el.promotion}
            productRating={el.productRating}
          />
        ))}
      </div>
    </div>
  );
}
