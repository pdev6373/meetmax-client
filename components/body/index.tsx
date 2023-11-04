import { ColorType } from "@/types";
import styles from "./index.module.css";
import { colorHandler } from "@/utlis";

type BodyType = {
  children: string;
  type?: "p" | "span";
  size: "x-large" | "large" | "medium" | "small" | "x-small";
  weight: "700" | "600" | "500" | "400";
  color: ColorType;
};

export default function Body({
  children,
  type = "p",
  size,
  weight,
  color,
}: BodyType) {
  const typographyHandler = () =>
    size === "x-large"
      ? styles.xLarge
      : size === "large"
      ? styles.large
      : size === "medium"
      ? styles.medium
      : size === "small"
      ? styles.small
      : styles.xSmall;

  const weightHandler = () =>
    weight === "700"
      ? styles.bold
      : weight === "600"
      ? styles.semiBold
      : weight === "500"
      ? styles.mediumWeight
      : styles.regular;

  return type === "p" ? (
    <p
      className={`${typographyHandler()} ${weightHandler()} ${colorHandler({
        color,
      })}`}
    >
      {children}
    </p>
  ) : (
    <span
      className={`${typographyHandler()} ${weightHandler()} ${colorHandler({
        color,
      })}`}
    >
      {children}
    </span>
  );
}
