import { z } from 'zod';

export const filterSchema = z.object({
  category_id: z.any().default('1'),
  sub_categories: z.array(z.object({ id: z.any() })).default([{ id: '1' }]),
  city_id: z.any().default('1'),
  min_price: z.any().default('0'),
  max_price: z.any().default('100'),
  min_avg_rates: z.any().default('0'),
  max_avg_rates: z.any().default('3'),
});
