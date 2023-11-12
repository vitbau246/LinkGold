import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
};
