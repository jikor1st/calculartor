import { convertObjectToCss } from "@/utils/common/styles";
import { css, styled } from "styled-components";

export type ButtonProps = {
  size?: "medium";
  color?: "fill-amber-600" | "fill-gray-300" | "fill-gray-800";
  fullWidth?: boolean;
  round?: boolean;
};

const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${({ size, round, theme }) => {
    switch (size) {
      case "medium":
      default:
        return css`
          height: ${theme.font.pxToRem(44)};
          padding: 0 ${theme.font.pxToRem(16)};
          ${convertObjectToCss(theme.typography.body1)};

          ${round &&
          css`
            border-radius: ${theme.font.pxToRem(22)};
          `}
        `;
    }
  }}

  ${({ color, theme }) => {
    switch (color) {
      case "fill-amber-600":
        return css`
          color: ${theme.color.white};
          background-color: ${theme.color.amber[600]};

          &:active {
            background-color: ${theme.color.amber[800]};
          }
        `;
      case "fill-gray-300":
        return css`
          color: ${theme.color.black};
          background-color: ${theme.color.gray[300]};

          &:active {
            background-color: ${theme.color.gray[500]};
          }
        `;
      case "fill-gray-800":
      default:
        return css`
          color: ${theme.color.white};
          background-color: ${theme.color.gray[800]};

          &:active {
            background-color: ${theme.color.gray[600]};
          }
        `;
    }
  }}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;

export default Button;
