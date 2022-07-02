import React from "react";
import { MoreHeroes } from "./styles";

interface ButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  text: string;
}

export const Button = ({ disabled, onClick, text }: ButtonProps) => {
  return (
    <MoreHeroes disabled={disabled} onClick={onClick}>
      {text}
    </MoreHeroes>
  );
};
