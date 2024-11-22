import { createSearchParamsCache, createSerializer, parseAsInteger, parseAsJson, parseAsString } from 'nuqs/server';
export const searchParams = {
  page: parseAsInteger.withDefault(1),
  limit: parseAsInteger.withDefault(10),
  category: parseAsString.withDefault('0'),
  city_id: parseAsString.withDefault('1'),
  subCategories: parseAsString.withOptions({ shallow: false }).withDefault(''),
  minPrice: parseAsInteger,
  maxPrice: parseAsInteger,
  minRate: parseAsInteger,
  maxRate: parseAsInteger,
  search: parseAsString.withOptions({ shallow: false }),
  staticsFilter: parseAsString.withOptions({ shallow: false }).withDefault('day'),
};

export const searchParamsCache = createSearchParamsCache(searchParams);
export const serialize = createSerializer(searchParams);
