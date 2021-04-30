export interface IStore {
  counter: number;
  users: {
    users: IUser[];
    status: string;
    error: null | string;
  };
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAdress;
}

export interface IAdress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}
