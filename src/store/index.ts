import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga";
import usersSlice from "./slices/usersSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    counter: counterSlice,
    users: usersSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
