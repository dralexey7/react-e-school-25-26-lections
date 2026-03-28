export interface ProductSpecifications {
  features: string[];
  details: Record<string, string>;
  variants: string[];
}

export interface Product {
  id: string;
  price: number;
  name: string;
  description: string;
  categories: string[];
  brand: string;
  rating: number;
  specifications: ProductSpecifications;
}
