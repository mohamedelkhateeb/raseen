'use client';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import { DialogDescription } from '@radix-ui/react-dialog';
import Image from 'next/image';

export function PictureDialog({ images }: any) {
  return (
    <Dialog>
      {images?.map((image: any, index: string) => (
        <div key={index}>
          <DialogTrigger onClick={() => console.log(index, image)} key={index}>
            <img src={image.img} alt="Image" className="rounded-md object-cover" />
          </DialogTrigger>
          <DialogContent className="w-3/4 border-none bg-transparent p-0 shadow-none lg:w-1/2">
            <DialogDescription className="hidden"></DialogDescription>
            <DialogTitle className="hidden"></DialogTitle>
            <img src={image.img} alt="Image" className="0 h-full w-full rounded-md object-fill" />
          </DialogContent>
        </div>
      ))}
    </Dialog>
  );
}
