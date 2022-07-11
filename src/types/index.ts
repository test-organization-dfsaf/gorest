export type UserType = {
  id: number,
  name: string;
  email: string;
  gender: string;
  status: string;
};

export type UserListType = UserType[];

export type UserRegistrationType = {
  name: string,
  email: string,
  gender: string,
  status: string,
};
