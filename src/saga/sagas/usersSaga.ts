import {
  put,
  takeEvery,
  call,
  CallEffect,
  PutEffect,
} from "@redux-saga/core/effects";
import { fetchUsers } from "../../helpers/apiCalls";
import {
  getUsersError,
  getUsersLoading,
  getUsersSuccessed,
} from "../../store/slices/usersSlice";

function* onGetUsers(): Generator<PutEffect | CallEffect> {
  try {
    const users = yield call(fetchUsers);

    yield put(getUsersSuccessed(users));
  } catch (error) {
    yield put(getUsersError(error));
  }
}

export default function* getUsers() {
  yield takeEvery(getUsersLoading, onGetUsers);
}
