import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface ButtonProps {
  mt: string | number;
}

export const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  background-color: violet;
  margin-top: ${(props) => props.mt || 0};

  & + & {
    margin-right: 10px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  & + & {
    margin-left: 10px;
  }
`;

export const StyledInput = styled.input`
  padding: 10px;
  width: 200px;
  font-size: 12px;
  margin-top: 10px;
  opacity: 1;
  transition-duration: 2s;
  transition-property: opacity;
  transition-delay: 1s;

  &:disabled {
    opacity: 0;
    transition-duration: 0;
    /* transition-property: opacity;
    transition-duration: 0;
    transition-delay: 0; */
  }
`;
