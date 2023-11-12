import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  addressId?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  midleName?: SortOrder;
  numbers?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
