import React from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useDirection } from '@/utils/helpers';
import { cn } from '@/lib/utils';
import { Checkbox } from '../ui/checkbox';

type DropdownMenuProps = {
  label: string;
  options: any[];
  isSelect?: boolean;
  className?: string;
  defaultValue?: string;
};

const GenericDropdownMenu = ({ label, options, isSelect, defaultValue = '' }: DropdownMenuProps) => {
  return (
    <div>
      <p className="py-4 text-xl font-semibold">{label}</p>
      <Select>
        <SelectTrigger dir={useDirection()} className={cn('rounded-2xl border-2 px-5 py-9 text-xl')}>
          <SelectValue className="text-xl text-gray-200" placeholder={label} />
        </SelectTrigger>
        <SelectContent className="flex flex-col gap-10" dir={useDirection()}>
          {options?.map((option, index) =>
            isSelect ? (
              <div dir={useDirection()} key={index.toString()} className="my-4 flex items-center justify-between gap-4 p-2 text-xl">
                <label
                  htmlFor={index.toString()}
                  className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {option.label}
                </label>
                <Checkbox className="h-4 w-4" id={index.toString()} />
              </div>
            ) : (
              <SelectItem defaultValue={defaultValue} key={index} className="text-xl" value={option.value} onChange={() => {}}>
                {option.label}
              </SelectItem>
            ),
          )}
        </SelectContent>
      </Select>
    </div>
  );
};

export default GenericDropdownMenu;
