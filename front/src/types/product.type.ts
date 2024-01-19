type Product = {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  price: number;
  quantity: number;
  pictures?: string[];
  thumbnail?: string;
  creationDate: Date;
};

export type { Product };
