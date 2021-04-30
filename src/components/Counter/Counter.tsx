import React, { FC, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { counterSelector } from "../../store/selectors";
import { decrement, increment } from "../../store/slices/counterSlice";
import Button from "../Button";

const Counter: FC = () => {
  const dispatch = useDispatch();
  const counter = useSelector(counterSelector);
  const [inputValue, setInputValue] = useState(1);

  const changeInputValueHandle = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setInputValue(+e.target.value);
  };

  const memoizedClickhandle = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>): void => {
      if ((e.target as HTMLButtonElement).value === "increment") {
        dispatch(increment(+inputValue));
      } else {
        dispatch(decrement(+inputValue));
      }
    },
    [inputValue, dispatch]
  );

  return (
    <>
      <h2>Counter: {counter}</h2>
      <input
        type='number'
        value={inputValue}
        onChange={changeInputValueHandle}
      />
      <div style={{ marginTop: "15px" }}>
        <Button title='increment' clickHandle={memoizedClickhandle} />
        <Button title='decrement' clickHandle={memoizedClickhandle} />
      </div>
      <NavLink to='/'>
        <Button title='Back home' />
      </NavLink>
    </>
  );
};

export default Counter;
