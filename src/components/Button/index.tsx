import React, { FC } from "react";
import { StyledButton } from "./styled";

interface ButtonProps {
  title: string;
  clickHandle?: (e: any) => void;
  mt?: string;
}

const Button: FC<ButtonProps> = ({ title, clickHandle, mt = 0 }) => {
  return (
    <>
      <StyledButton
        className='button'
        mt={mt}
        value={title}
        onClick={clickHandle}
      >
        {title}
      </StyledButton>
    </>
  );
};

export default Button;
