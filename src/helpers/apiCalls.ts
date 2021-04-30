import { IUser } from "../types/types";
import axios from "axios";

export const fetchUsers = async (): Promise<IUser[]> => {
  const data = await axios.get("https://jsonplaceholder.typicode.com/users");

  return data.data;
};
