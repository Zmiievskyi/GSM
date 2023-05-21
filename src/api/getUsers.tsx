import axios, { AxiosResponse } from "axios";

const baseAxiosUrl = "https://644b42b74bdbc0cc3a8de7fe.mockapi.io";
axios.defaults.baseURL = baseAxiosUrl;


// export interface UserList {
//   id: string;
//   user: string;
//   avatar: string;
//   followers: number;
//   tweets: number;
//   add: boolean;
// }
export type UserList = User[];

export interface User {
  id: string;
  user: string;
  avatar: string;
  followers: number;
  tweets: number;
  add: boolean;
}

export const getUsersApi = (): Promise<UserList> => {
  return axios.get("/users").then((response: AxiosResponse<User[]>) => {
    return response.data;
  });
};

export const changeUserApi = (id: number, user: User): Promise<User> => {
  try {
    return axios
      .put(`/users/${id}`, { add: user.add, followers: user.followers })
      .then((response: AxiosResponse<User>) => {
        return response.data;
      });
  } catch (error) {
    console.log(error);
    throw error;
  }
};