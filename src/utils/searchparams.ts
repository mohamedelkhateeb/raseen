import { filterSchema } from '@/types/schema/order';
import { createSearchParamsCache, createSerializer, parseAsInteger, parseAsJson, parseAsString } from 'nuqs/server';
export const searchParams = {
  page: parseAsInteger.withDefault(1),
  limit: parseAsInteger.withDefault(10),
  category: parseAsString.withDefault("1"),
  filter: parseAsJson(filterSchema.parse).withDefault({
    category_id: 1,
    sub_categories: [{ id: 1 }],
    city_id: 1,
    min_price: 0,
    max_price: 10000,
  }),
  search: parseAsString.withOptions({ shallow: false }),
};

export const searchParamsCache = createSearchParamsCache(searchParams);
export const serialize = createSerializer(searchParams);
