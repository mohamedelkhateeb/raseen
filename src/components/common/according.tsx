import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { NavItem } from '@/types/app';

interface AccordionItemData {
  value: string;
  trigger: string;
  content: string | NavItem[];
}

interface AccordionProps {
  items: any[];
}

export default function GenericAccordion({ items }: AccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items?.map((item, index) => (
        <AccordionItem key={index} value={item.value}>
          <AccordionTrigger className={cn('font-semibold hover:no-underline')}>{item.trigger}</AccordionTrigger>
          <AccordionContent className="flex flex-col">
            {typeof item.content === 'string'
              ? item.content
              : item?.content?.map((content: any, index: any) => (
                  <Link
                    href={`/companies?category=${item?.value}&subCategories=${content?.id}`}
                    key={index}
                    className="px-4 py-2 text-gray-800 hover:text-black"
                  >
                    {content?.name}
                  </Link>
                ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
