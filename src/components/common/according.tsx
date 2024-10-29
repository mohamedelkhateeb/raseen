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
  items: AccordionItemData[];
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
              : item?.content?.map((content, Sindex) => (
                  <Link href={content.href} key={Sindex} className="px-4 py-2 text-gray-800 hover:text-black">
                    {content.title}
                  </Link>
                ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
