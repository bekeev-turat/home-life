import clsx from "clsx";
import s from "./Li.module.scss";

export function Li({ className, children, size, type, color, img }) {
  return (
    <li className={clsx(s.li, s[size], s[type], s[color], className)}>
      {img && <img src={img} alt="iconca" className={s.img} />}
      {children}
    </li>
  );
}
