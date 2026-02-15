import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

interface Props {
    className?: string;
}

export const Container = ({ className, children }: PropsWithChildren<Props>) => {
    return <div className={cn('mx-auto max-w-7xl', className)}>{children}</div>;
};
