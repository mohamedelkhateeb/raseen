import { createSearchParamsCache, createSerializer, parseAsInteger, parseAsJson, parseAsString } from 'nuqs/server';
export const searchParams = {
  page: parseAsInteger.withDefault(1),
  limit: parseAsInteger.withDefault(10),
  category: parseAsString.withDefault('0'),
  city_id: parseAsString.withDefault('1'),
  subCategories: parseAsString.withOptions({ shallow: false }).withDefault(''),
  minPrice: parseAsInteger.withDefault(0),
  maxPrice: parseAsInteger.withDefault(10000),
  minRate: parseAsInteger.withDefault(0),
  maxRate: parseAsInteger.withDefault(3),
  search: parseAsString.withOptions({ shallow: false }),
};

export const searchParamsCache = createSearchParamsCache(searchParams);
export const serialize = createSerializer(searchParams);
