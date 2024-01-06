import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ScrollToTopButton } from '@/features/ScrollToTopButton';
import cls from './ScrollToolbar.module.scss';

interface ScrollToolbarProps {
    className?: string;
}

export const ScrollToolbar = memo((props: ScrollToolbarProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls['scroll-toolbar'], {}, [className])}>
            <ScrollToTopButton />
        </div>
    );
});
