import { ButtonProps } from "@/components/common/Button";

type CommonCalculatorItemType<T> = T & {
  color?: ButtonProps["color"];
  column?: number;
};
export type CalculatorItemType =
  | CommonCalculatorItemType<{ type: "function"; value: string }>
  | CommonCalculatorItemType<{ type: "operator"; value: string }>
  | CommonCalculatorItemType<{ type: "number"; value: number | "." }>;
