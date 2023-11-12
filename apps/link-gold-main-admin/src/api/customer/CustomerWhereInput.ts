import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type CustomerWhereInput = {
  address?: AddressWhereUniqueInput;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringFilter;
  midleName?: StringNullableFilter;
  numbers?: IntNullableFilter;
  orders?: OrderListRelationFilter;
  phone?: StringNullableFilter;
  products?: ProductListRelationFilter;
  username?: StringNullableFilter;
};
