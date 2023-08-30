import { ButtonContainer, buttonVariant } from "./Button.styles";

interface ButtonProps {
  variant?: buttonVariant;
}

export const Button = ({ variant = "primary" }: ButtonProps) => {
  return <ButtonContainer variant={variant} />;
};
