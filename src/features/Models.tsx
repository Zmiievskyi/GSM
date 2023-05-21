export interface User {
  id: string;
  user: string;
  avatar: string;
  followers: number;
  tweets: number;
  add: boolean;
}
export type UserList = User[];

export interface ListProps {
  userList: UserList;
  filter?: string;
}



export interface ItemProps {
  user: User;
  onFollow: (id: string) => void;
}


