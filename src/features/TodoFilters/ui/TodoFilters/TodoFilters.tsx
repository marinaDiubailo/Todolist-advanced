/* eslint-disable i18next/no-literal-string */
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { FilterType } from '../../model/types/filter';
import cls from './TodoFilters.module.scss';

interface TodoFiltersProps {
    className?: string;
    onChangeFilter: (filter: FilterType) => void;
    filter: FilterType;
}

export const TodoFilters = memo((props: TodoFiltersProps) => {
    const { className, onChangeFilter, filter } = props;

    const onAllClickHandler = useCallback(() => {
        onChangeFilter('all');
    }, [onChangeFilter]);

    const onActiveClickHandler = useCallback(() => {
        onChangeFilter('active');
    }, [onChangeFilter]);

    const onCompletedClickHandler = useCallback(() => {
        onChangeFilter('completed');
    }, [onChangeFilter]);

    return (
        <div className={classNames('', {}, [className])}>
            <button
                className={classNames('', { [cls.active]: filter === 'all' }, [
                    className,
                ])}
                type="button"
                onClick={onAllClickHandler}
            >
                All
            </button>
            <button
                className={classNames(
                    '',
                    { [cls.active]: filter === 'active' },
                    [className],
                )}
                type="button"
                onClick={onActiveClickHandler}
            >
                Active
            </button>
            <button
                className={classNames(
                    '',
                    { [cls.active]: filter === 'completed' },
                    [className],
                )}
                type="button"
                onClick={onCompletedClickHandler}
            >
                Completed
            </button>
        </div>
    );
});
