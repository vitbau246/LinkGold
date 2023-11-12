import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type ProductWhereInput = {
  customer?: CustomerWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  itemPrice?: FloatNullableFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
};
