export type MPlan = {
  id: number;
  name: any;
  price_month: string;
  count_sent_month: number;
  count_received_month: number;
  details: Array<{
    id: number;
    desc_month: string;
  }>;
};

export type YPlan = {
  id: number
  name: any
  price_year: string
  count_sent_year: number
  count_received_year: number
  details: Array<{
    id: number
    desc_year: string
  }>
}
