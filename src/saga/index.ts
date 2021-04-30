import { all } from "redux-saga/effects";
import getUsers from "./sagas/usersSaga";

export default function* rootSaga() {
  yield all([getUsers()]);
}
