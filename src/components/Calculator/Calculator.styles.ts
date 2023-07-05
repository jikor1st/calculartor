import { css, styled } from "styled-components";
import Button from "../common/Button";
import Typography from "../common/Typography";
import { CALCULATOR_COLUMNS } from "@/constants/calculator";

export const CalculatorContainer = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    min-width: 320px;
    padding: 20px;
    background: ${theme.color.black};
  `}
`;

export const CalculatorWrapper = styled.div`
  max-width: 200px;
  margin: 0 auto;
`;

export const CalculatorResultWrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.font.pxToRem(12)};
    padding-right: 0;
  `}
`;

export const CalculatorResult = styled(Typography).attrs({
  variant: "h3",
})`
  text-align: right;
  ${({ theme }) => css`
    font-weight: ${theme.font.fontWeight.thin};
  `}
`;
export const CalculatorButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${CALCULATOR_COLUMNS}, 1fr);
  ${({ theme }) => css`
    gap: ${theme.font.pxToRem(8)};
  `}
`;

type CalculatorButtonProps = {
  column?: number;
};

export const CalculatorButton = styled(Button).attrs({
  round: true,
  fullWidth: true,
})<CalculatorButtonProps>`
  ${({ column }) =>
    column &&
    css`
      grid-column: span ${column};
    `}
`;
