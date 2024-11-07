import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Link } from '@/i18n/routing';
import React, { Fragment } from 'react';

type BreadcrumbItemProps = {
  title: string | React.ReactNode;
  link: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItemProps[] }) {
  return (
    <Breadcrumb>
      <BreadcrumbList className="text-2xl font-semibold text-gray-800">
        {items?.map((item, index) => (
          <Fragment key={index}>
            {index !== items.length - 1 && (
              <BreadcrumbItem>
                <Link prefetch={true} href={item.link}>
                  {item.title}
                </Link>
              </BreadcrumbItem>
            )}
            {index < items.length - 1 && <BreadcrumbSeparator></BreadcrumbSeparator>}
            {index === items.length - 1 && <BreadcrumbPage className="text-2xl font-semibold text-gray-800">{item.title}</BreadcrumbPage>}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
