import styles from "./index.module.css";

type FlexType = {
  children: JSX.Element;
  gap: "8px" | "10px" | "20px" | "23px";
  justify?:
    | "flex-end"
    | "flex-start"
    | "center"
    | "space-around"
    | "space-between"
    | "space-evenly";
  alignItems?: "flex-end" | "flex-start" | "center" | "stretch";
  self?: "flex-end" | "flex-start" | "center" | "stretch" | "auto";
  direction?: "row" | "column";
  fullWidth?: boolean;
};

export default function Flex({
  children,
  gap,
  justify = "flex-start",
  alignItems = "center",
  self = "auto",
  direction = "row",
  fullWidth = false,
}: FlexType) {
  return (
    <div
      className={styles.wrapper}
      style={{
        gap,
        justifyContent: justify,
        alignItems,
        alignSelf: self,
        flexDirection: direction,
        width: fullWidth ? "100%" : "auto",
      }}
    >
      {children}
    </div>
  );
}
