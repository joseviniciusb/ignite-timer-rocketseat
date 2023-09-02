import styled , {css} from "styled-components";

export type buttonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
    variant: buttonVariant ;
}

const buttonVariants = {
    primary: "purple",
    secondary: "orange",
    danger: "red",
    success: "green"
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
width: 100px;
height: 100px;
background-color: ${props=> props.theme['green-500']}

`