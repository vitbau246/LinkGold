import { Address } from "../address/Address";
import { Order } from "../order/Order";
import { Product } from "../product/Product";

export type Customer = {
  address?: Address | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string;
  midleName: string | null;
  numbers: number | null;
  orders?: Array<Order>;
  phone: string | null;
  products?: Array<Product>;
  updatedAt: Date;
  username: string | null;
};
