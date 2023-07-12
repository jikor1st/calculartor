import { ButtonProps } from "@/components/common/Button";

type CommonCalculatorItemType<T> = T & {
  color?: ButtonProps["color"];
  column?: number;
};

export type FunctionCalculatorItemType = CommonCalculatorItemType<{
  type: "function";
  value: string;
}>;

export type OperatorCalculatorItemType = CommonCalculatorItemType<{
  type: "operator";
  value: "±" | "%" | "÷" | "×" | "-" | "+";
}>;

export type NumberCalculatorItemType = CommonCalculatorItemType<{
  type: "number";
  value: number | ".";
}>;

export type CalulateCalculatorItemType = CommonCalculatorItemType<{
  type: "calculate";
  value: "=";
}>;
export type ResultCalculatorItemType = CommonCalculatorItemType<{
  type: "result";
  value: number;
}>;

export type CalculatorItemType =
  | FunctionCalculatorItemType
  | OperatorCalculatorItemType
  | NumberCalculatorItemType
  | CalulateCalculatorItemType;
