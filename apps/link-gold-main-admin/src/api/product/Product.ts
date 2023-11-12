import { Customer } from "../customer/Customer";
import { Order } from "../order/Order";

export type Product = {
  createdAt: Date;
  customer?: Customer | null;
  description: string | null;
  id: string;
  itemPrice: number | null;
  name: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
