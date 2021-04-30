import React, { FC, useRef, useState } from "react";
import Button from "../Button";
import { StyledInput, StyledNavLink } from "../Button/styled";
import "./home.css";

const Home: FC = () => {
  const box = useRef<HTMLDivElement>(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const moveHandle = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (box.current?.classList.contains("active")) {
      box.current?.classList.remove("active");
      box.current?.classList.add("not_active");
    } else {
      box.current?.classList.remove("not_active");
      box.current?.classList.add("active");
    }

    setIsDisabled((prev) => !prev);
  };

  return (
    <>
      <h2>Welcome, chose your path</h2>
      <StyledNavLink to='/counter'>
        <Button title='Counter' />
      </StyledNavLink>
      <StyledNavLink to='/users'>
        <Button title='Users' />
      </StyledNavLink>
      <div style={{ display: "flex" }}>
        <StyledInput type='text' disabled={isDisabled} />
        <div className='box' ref={box}>
          {" "}
          <Button title='Show input' mt='10px' clickHandle={moveHandle} />
        </div>
      </div>
    </>
  );
};

export default Home;
