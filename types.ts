export type ColorType =
  | "primary-base"
  | "primary-400"
  | "primary-300"
  | "primary-200"
  | "primary-100"
  | "secondary-base"
  | "secondary-400"
  | "secondary-300"
  | "secondary-200"
  | "secondary-100"
  | "alert-success-dark"
  | "alert-success-base"
  | "alert-success-light"
  | "alert-warning-dark"
  | "alert-warning-base"
  | "alert-warning-light"
  | "alert-error-dark"
  | "alert-error-base"
  | "alert-error-light"
  | "white"
  | "orange"
  | "blue"
  | "purple"
  | "greyscale-50"
  | "greyscale-100"
  | "greyscale-200"
  | "greyscale-300"
  | "greyscale-400"
  | "greyscale-500"
  | "greyscale-600"
  | "greyscale-700"
  | "greyscale-800"
  | "greyscale-900";

export type CardType = {
  route: string;
  heading: string;
  body: string;
  icon: string;
};
