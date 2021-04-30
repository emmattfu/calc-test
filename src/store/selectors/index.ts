import { createSelector } from "@reduxjs/toolkit";
import { IStore } from "../../types/types";

const getState = (state: IStore) => state;

export const counterSelector = createSelector(
  getState,
  (state) => state.counter
);

export const usersSelector = createSelector(
  getState,
  (state) => state.users.users
);
