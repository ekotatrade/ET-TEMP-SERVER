export type TUserName = {
  firstName: string;
  lastName: string;
};
export type TUser = {
  userId: string;
  name: TUserName;
  image: string;
  phone: string;
  email: string;
  password: string;
  needPasswordChange: boolean;
  dob: Date;
  role: 'superAdmin' | 'admin';
};
