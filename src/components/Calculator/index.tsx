import { CALCULATOR_ARRAY } from "@/constants/calculator";
import {
  CalculatorContainer,
  CalculatorWrapper,
  CalculatorButton,
  CalculatorButtonWrapper,
  CalculatorResultWrapper,
  CalculatorResult,
} from "./Calculator.styles";
import { useEffect, useState } from "react";
import {
  CalculatorItemType,
  CalulateCalculatorItemType,
  NumberCalculatorItemType,
  OperatorCalculatorItemType,
  ResultCalculatorItemType,
} from "@/types/calculator";
import { isNumeric } from "@/utils/common";

const state = ["상태1", "상태2"];

const Calculator = () => {
  const [calcProcess, setCalcProcess] = useState<
    (
      | OperatorCalculatorItemType
      | NumberCalculatorItemType
      | CalulateCalculatorItemType
      | ResultCalculatorItemType
    )[]
  >([]);

  function handleComputeCalcProcess() {
    const numberStack: number[] = [];
    const operatorStack: OperatorCalculatorItemType["value"][] = [];

    const arithmetic = [...calcProcess];

    while (arithmetic.length > 0) {
      const calcItem = arithmetic.shift()!;

      if (calcItem.type === "number") {
        if (calcItem.value === ".") {
          // INFO: .
        } else {
          numberStack.unshift(calcItem.value);
        }
      } else if (calcItem.type === "operator") {
        if (calcItem.value === "×") {
          // INFO: 곱하기
          const num1 = numberStack.shift()!;
          const num2 = arithmetic.shift()!.value as number;
          numberStack.unshift(num1 * num2);
        } else if (calcItem.value === "÷") {
          // INFO: 나누기
          const num1 = numberStack.shift()!;
          const num2 = arithmetic.shift()!.value as number;
          numberStack.unshift(num1 / num2);
        } else {
          operatorStack.unshift(calcItem.value);
        }
      }
    }

    while (operatorStack.length) {
      const operator = operatorStack.shift();
      const num2 = numberStack.shift()!;
      const num1 = numberStack.shift()!;

      if (operator === "+") {
        numberStack.unshift(num1 + num2);
      } else if (operator === "-") {
        numberStack.unshift(num1 - num2);
      }
    }

    const result = numberStack[0];

    setCalcProcess((prev) => [
      ...prev,
      {
        type: "calculate",
        value: "=",
      },
      {
        type: "result",
        value: result,
      },
    ]);
  }

  return (
    <CalculatorContainer>
      <CalculatorWrapper>
        <CalculatorResultWrapper>
          <CalculatorResult>
            {calcProcess?.length
              ? calcProcess.map(({ value }) => <span key={value}>{value}</span>)
              : "0"}
          </CalculatorResult>
        </CalculatorResultWrapper>
        <CalculatorButtonWrapper>
          {CALCULATOR_ARRAY.map((calcItem) => {
            const { type, value, color, column } = calcItem;

            return (
              <CalculatorButton
                onClick={() => {
                  switch (type) {
                    case "calculate":
                      handleComputeCalcProcess();
                      break;
                    case "number":
                      setCalcProcess((prev) => [...prev, calcItem]);
                      break;
                    case "operator":
                      setCalcProcess((prev) => {
                        const isNotPrevTypeOperator =
                          prev.length &&
                          prev[prev.length - 1].type !== "operator";

                        if (isNotPrevTypeOperator) {
                          return [...prev, calcItem];
                        }

                        return prev;
                      });
                      break;
                    case "function":
                      break;
                    default:
                      return;
                  }
                }}
                color={color}
                column={column}
                key={value}
              >
                {value}
              </CalculatorButton>
            );
          })}
        </CalculatorButtonWrapper>
      </CalculatorWrapper>
    </CalculatorContainer>
  );
};

export default Calculator;
