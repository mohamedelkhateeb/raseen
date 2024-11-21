import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { parseAsInteger, useQueryState } from 'nuqs';
import { Button } from '../ui/button';

export function Paginations() {
  const [currentPage, setCurrentPage] = useQueryState('page', parseAsInteger.withOptions({ shallow: false }).withDefault(1));
  return (
    <Pagination dir="ltr">
      <PaginationContent>
        <PaginationItem>
          <Button variant={'outline'}>السابق</Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant={'outline'}>التالي</Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
