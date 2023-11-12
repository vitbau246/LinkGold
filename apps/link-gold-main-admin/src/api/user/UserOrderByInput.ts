import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  birthday?: SortOrder;
  createdAt?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  midleName?: SortOrder;
  numbers?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
