import { CalculatorItemType } from "@/types/calculator";

export const CALCULATOR_COLUMNS = 4;

export const CALCULATOR_ARRAY: CalculatorItemType[] = [
  {
    type: "function",
    value: "C",
    color: "fill-gray-300",
  },
  {
    type: "operator",
    value: "±",
    color: "fill-gray-300",
  },
  {
    type: "operator",
    value: "%",
    color: "fill-gray-300",
  },
  {
    type: "operator",
    value: "÷",
    color: "fill-amber-600",
  },
  {
    type: "number",
    value: 7,
  },
  {
    type: "number",
    value: 8,
  },
  {
    type: "number",
    value: 9,
  },
  {
    type: "operator",
    value: "×",
    color: "fill-amber-600",
  },
  {
    type: "number",
    value: 4,
  },
  {
    type: "number",
    value: 5,
  },
  {
    type: "number",
    value: 6,
  },
  {
    type: "operator",
    value: "-",
    color: "fill-amber-600",
  },
  {
    type: "number",
    value: 1,
  },
  {
    type: "number",
    value: 2,
  },
  {
    type: "number",
    value: 3,
  },
  {
    type: "operator",
    value: "+",
    color: "fill-amber-600",
  },
  {
    type: "number",
    value: 0,
    column: 2,
  },
  {
    type: "number",
    value: ".",
  },
  {
    type: "calculate",
    value: "=",
    color: "fill-amber-600",
  },
];
