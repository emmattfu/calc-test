import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetData = (action: () => void): void => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action());
  }, [dispatch, action]);
};

export default useGetData;
