export interface ICustomer {
  code_id: string;
  customer_name?: string;
  customer_address?: string;
  customer_inv_address?: string;
  tax_code?: string;
  delivery_address?: string;
  email?: string;
  longitude?: number;
  latitude?: number;
  images?: string[];
  file_business?: string[];
  file_gdp?: string[];
  date_delivery?: string;
  scope?: number[];
}
