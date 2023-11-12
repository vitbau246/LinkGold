import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";
import { ProductUpdateManyWithoutCustomersInput } from "./ProductUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string;
  midleName?: string | null;
  numbers?: number | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
  phone?: string | null;
  products?: ProductUpdateManyWithoutCustomersInput;
  username?: string | null;
};
