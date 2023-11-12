import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";
import { ProductCreateNestedManyWithoutCustomersInput } from "./ProductCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address?: AddressWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName: string;
  midleName?: string | null;
  numbers?: number | null;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
  phone?: string | null;
  products?: ProductCreateNestedManyWithoutCustomersInput;
  username?: string | null;
};
