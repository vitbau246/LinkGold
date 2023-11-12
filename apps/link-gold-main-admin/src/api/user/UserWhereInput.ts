import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserWhereInput = {
  birthday?: DateTimeFilter;
  firstName?: StringFilter;
  id?: StringFilter;
  lastName?: StringFilter;
  midleName?: StringNullableFilter;
  numbers?: StringNullableFilter;
  username?: StringFilter;
};
