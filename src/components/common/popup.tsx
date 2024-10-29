import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface PopoverProps {
  children: React.ReactNode;
  trigger?: string | React.ReactNode;
  description?: string;
  title: string;
  saveBtn?: string;
  defaultOpen?: boolean;
  style?: string;
  dataOpen?: boolean;
  triggerStyle?: string;
}

export default function Popup({ children, trigger, description, title, defaultOpen, style, dataOpen, triggerStyle }: PopoverProps) {
  return (
    <Dialog defaultOpen={defaultOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={style}>
        <DialogHeader>
          <DialogTitle className="text-center">{title}</DialogTitle>
          <DialogDescription className="text-center">{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
