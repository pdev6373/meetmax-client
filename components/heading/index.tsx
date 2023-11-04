import { colorHandler } from "@/utlis";
import styles from "./index.module.css";
import { ColorType } from "@/types";

type HeadingType = {
  children: string;
  type: "h1" | "h2" | "h3";
  size: "one" | "two" | "three" | "four" | "five" | "six";
  color: ColorType;
};

export default function Heading({ children, type, size, color }: HeadingType) {
  const typographyHandler = () =>
    size === "one"
      ? styles.xxLarge
      : size === "two"
      ? styles.xLarge
      : size === "three"
      ? styles.large
      : size === "four"
      ? styles.medium
      : size === "five"
      ? styles.small
      : styles.xSmall;

  return type === "h1" ? (
    <h1 className={`${typographyHandler()} ${colorHandler({ color })}`}>
      {children}
    </h1>
  ) : type === "h2" ? (
    <h2 className={`${typographyHandler()} ${colorHandler({ color })}`}>
      {children}
    </h2>
  ) : (
    <h3 className={`${typographyHandler()} ${colorHandler({ color })}`}>
      {children}
    </h3>
  );
}
