export type CompanyOffers = {
  id: number;
  order: {
    id: number;
    user: {
      id: number;
      name: string;
      img: string;
    };
    code: number;
    min_price: number;
    max_price: number;
    phone: string;
    whatsapp: string;
    sub_categories: Array<{
      id: number;
      name: string;
    }>;
  };
  status: {
    id: number;
    name: string;
  };
};

export type CompanyOrders = {
  id: number;
  user: {
    id: number;
    name: string;
    img: string;
  };
  code: number;
  min_price: number;
  max_price: number;
  phone: string;
  whatsapp: string;
  sub_categories: Array<{
    id: number;
    name: string;
  }>;
};

export type CompanyOrder = {
  id: number;
  user: {
    id: number;
    name: string;
    img: string;
  };
  category: {
    id: number;
    name: string;
  };
  code: number;
  city: {
    id: number;
    name: string;
  };
  note: string;
  min_price: number;
  max_price: number;
  images: Array<{
    id: number;
    img: string;
  }>;
  sub_categories: Array<{
    id: number;
    name: string;
  }>;
};
