import { CALCULATOR_ARRAY } from "@/constants/calculator";
import {
  CalculatorContainer,
  CalculatorWrapper,
  CalculatorButton,
  CalculatorButtonWrapper,
  CalculatorResultWrapper,
  CalculatorResult,
} from "./Calculator.styles";

const Calculator = () => {
  return (
    <CalculatorContainer>
      <CalculatorWrapper>
        <CalculatorResultWrapper>
          <CalculatorResult>8000</CalculatorResult>
        </CalculatorResultWrapper>
        <CalculatorButtonWrapper>
          {CALCULATOR_ARRAY.map(({ type, value, color, column }) => {
            return (
              <CalculatorButton
                onClick={() => {
                  if (type === "operator") {
                  }

                  if (type === "number") {
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
