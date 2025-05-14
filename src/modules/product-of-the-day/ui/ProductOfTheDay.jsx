import { BannerImg } from "../../../shared/assets/imgs/BannerImg.jsx";
import { Li, Title } from "../../../shared/components/ui/Text";

import s from "./ProductOfTheDay.module.scss";

export function ProductOfTheDay() {
  return (
    <div className={s.container}>
      <ul>
        <Li size="md-16">Телевизоры</Li>
        <Li size="md-16">Бытовая техника</Li>
        <Li size="md-16">Встраиваемая бытовая техника</Li>
        <Li size="md-16">Мелкая бытовая техника</Li>
      </ul>

      <BannerImg />

      <div>
        <Title size="md-20">Товар дня</Title>
        <div className={s.product}></div>
      </div>
    </div>
  );
}
