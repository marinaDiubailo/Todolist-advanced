/* eslint-disable i18next/no-literal-string */
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { FilterType } from '../../model/types/filter';
import cls from './TodoFilters.module.scss';

interface TodoFiltersProps {
    className?: string;
    onChangeFilter: (filter: FilterType, todolistId: string) => void;
    filter: FilterType;
    todolistId: string;
}

export const TodoFilters = memo((props: TodoFiltersProps) => {
    const { className, onChangeFilter, filter, todolistId } = props;

    const onAllClickHandler = useCallback(() => {
        onChangeFilter('all', todolistId);
    }, [onChangeFilter, todolistId]);

    const onActiveClickHandler = useCallback(() => {
        onChangeFilter('active', todolistId);
    }, [onChangeFilter, todolistId]);

    const onCompletedClickHandler = useCallback(() => {
        onChangeFilter('completed', todolistId);
    }, [onChangeFilter, todolistId]);

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
