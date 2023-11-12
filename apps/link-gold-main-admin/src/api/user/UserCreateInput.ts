import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  birthday: Date;
  firstName: string;
  lastName: string;
  midleName?: string | null;
  numbers?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
