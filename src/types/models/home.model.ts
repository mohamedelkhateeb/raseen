export type Banner = {
  id: number;
  title: string;
  desc: string;
  link: string;
  company: string;
  img: string;
};

export type Article = {
  id: number;
  title: string;
  desc: string;
  img: string;
  category: {
    id: number;
    name: string;
  };
};

export type Category = {
  id: number;
  name: string;
  img: string;
  subCategories: Array<{
    id: number;
    name: string;
    img: string;
  }>;
};

export type Company = {
  id: number;
  name: string;
  desc: string;
  img: string;
  avg_rates: string;
  rates_count: number;
  fav: boolean;
  sub_categories: Array<{
    id: number;
    name: string;
    img: string;
  }>;
  cvs: Array<{
    id: number;
    img: string;
  }>;
  certeficates: Array<{
    id: number;
    img: string;
  }>;
};

export type SubCategory = {
  id: number;
  name: string;
  img: string;
};

export type Partner = {
  id: number;
  img: string;
};

export type Rate = {
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
