import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
};
