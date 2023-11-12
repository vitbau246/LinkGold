import { JsonValue } from "type-fest";

export type User = {
  birthday: Date;
  createdAt: Date;
  firstName: string;
  id: string;
  lastName: string;
  midleName: string | null;
  numbers: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
