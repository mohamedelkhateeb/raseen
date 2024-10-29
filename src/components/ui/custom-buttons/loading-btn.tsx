'use client';
import { useFormStatus } from 'react-dom';
import { Button } from '../button';

function LoadingButton({ content, style, loader }: { content: string; style?: string; loader?: string }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className={style} disabled={pending}>
      {pending ? <span>{loader ? loader : content}</span> : <span>{content}</span>}
    </Button>
  );
}

export default LoadingButton;
