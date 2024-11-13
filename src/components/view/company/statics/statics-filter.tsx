'use client';
import * as React from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useDirection } from '@/utils/helpers';
import { parseAsString, useQueryState } from 'nuqs';

export function StaticsFilter() {
  const [staticsFilter, setStaticsFilter] = useQueryState('staticsFilter', parseAsString.withOptions({ shallow: false }).withDefault('day'));
  return (
    <Select dir={useDirection()} defaultValue={staticsFilter} onValueChange={(value) => setStaticsFilter(value)}>
      <SelectTrigger className="w-[150px] rounded-3xl p-4 py-6">
        <SelectValue placeholder="تحديد الوقت" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="day">هذا اليوم</SelectItem>
          <SelectItem value="week">هذا الاسبوع</SelectItem>
          <SelectItem value="month">هذا الشهر</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
