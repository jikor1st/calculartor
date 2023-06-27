import { CSSProperties } from "react";

export const pxToRem = (pxNumber: number) => {
  return `${pxNumber / 10}rem`;
};

export const convertObjectToCss = (styleObject: CSSProperties) => {
  return Object.entries(styleObject)
    .map(
      ([key, value]) =>
        `${key.replace(/([A-Z])/g, "-$1").toLowerCase()}:${value}`
    )
    .join("; ");
};
