export interface ImageFile {
  file: File;
  preview: string;
}

export interface Order {
  images: any[];
  max: string;
  min: string;
  notes: string;
  city_id: string;
  sub_categories: { id: string }[];
  category_id: string;
}

export type ReadOrder = {
  id: number;
  code: number;
  category: {
    id: number;
    name: string;
    img: string;
  };
  status: {
    id: number;
    name: string;
  };
};
export type TOffer = {
  id: number;
  company: {
    id: number;
    name: string;
    desc: string;
    avg_rates: string;
    img: string;
    fav: boolean;
  };
  price: string;
  note: string;
};

export type TOrder = {
  id: number;
  category: {
    id: number;
    name: string;
    img: string;
  };
  status: {
    id: number;
    name: string;
  };
  code: number;
  city: {
    id: number;
    name: string;
  };
  note: string;
  images: Array<{
    id: number;
    img: string;
  }>;
  sub_categories: Array<{
    id: number;
    name: string;
  }>;
  offers: Array<TOffer>;
  offers_rejected: Array<TOffer>;
  rates: {
    id: number;
    user_rate: {
      id: number;
      name: string;
      img: string;
    };
    rate: number;
    msg: string;
    created_at: string;
  };
  offer_accepted?: TOffer;
};
