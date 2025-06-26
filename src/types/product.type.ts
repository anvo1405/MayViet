export interface IGetFeaturedProductsResponse {
  data: IFeaturedProduct[];
  total: number;
}

export interface IFeaturedProduct {
  id_product: number;
  product_code: string;
  product_name: string;
  product_image: string;
  product_price_old: number;
  product_price_new: number;
  slug: string;
  category_name: string;
  rate: number;
  is_status: number;
  is_favourited: number;
  active: number;
  created_at: string;
  updated_at: string;
  product_color: IFeaturedProductColor[];
}

export interface IFeaturedProductColor {
  color_code: string;
  color_name: string;
}
