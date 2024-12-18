'use client';

import { Pagination, PaginationContent, PaginationItem } from '@/components/ui/pagination';
import { parseAsInteger, useQueryState } from 'nuqs';
import { Button } from '../ui/button';
import { Pagination as PaginationType } from '@/types/Response';
import { useTranslations } from 'next-intl';

export function Paginations({ pagination }: { pagination: PaginationType }) {
  const t = useTranslations('Pagination'); 
  const [currentPage, setCurrentPage] = useQueryState('page', parseAsInteger.withOptions({ shallow: false }).withDefault(1));

  return (
    <Pagination className="mt-4" dir="ltr">
      <PaginationContent className="flex gap-5">
        <PaginationItem>
          <Button disabled={pagination?.prev_page_url === null} size="lg" onClick={() => setCurrentPage(currentPage - 1)} variant="outline">
            {t('previous')}
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button disabled={pagination?.next_page_url === null} size="lg" onClick={() => setCurrentPage(currentPage + 1)} variant="outline">
            {t('next')}
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
