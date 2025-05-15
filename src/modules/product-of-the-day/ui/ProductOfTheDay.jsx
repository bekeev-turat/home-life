import { BannerImg } from "../../../shared/assets/imgs/BannerImg.jsx";
import { AppLink, Title } from "../../../shared/components/ui/Text";

import s from "./ProductOfTheDay.module.scss";

export function ProductOfTheDay() {
  return (
    <div className={s.container}>
      <div className={s.link}>
        <AppLink size="md-16">Телевизоры</AppLink>
        <AppLink size="md-16">Бытовая техника</AppLink>
        <AppLink size="md-16">Встраиваемая бытовая техника</AppLink>
        <AppLink size="md-16">Мелкая бытовая техника</AppLink>
      </div>

      <BannerImg />

      <div>
        <Title size="md-20">Товар дня</Title>
        <div className={s.product}></div>
      </div>
    </div>
  );
}
