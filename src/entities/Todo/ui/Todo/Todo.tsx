/* eslint-disable i18next/no-literal-string */
import { ChangeEvent, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ITodo } from '../../model/types/todo';
import cls from './Todo.module.scss';

interface TodoProps {
    className?: string;
    todo: ITodo;
    removeTodo: (todoId: string) => void;
    toggleStatus: (todoId: string, isDone: boolean) => void;
}

export const Todo = memo((props: TodoProps) => {
    const { className, todo, removeTodo, toggleStatus } = props;
    const { title, isDone, id } = todo;

    const clickHandler = useCallback(() => {
        removeTodo(id);
    }, [removeTodo, id]);

    const toggleStatusHandler = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            toggleStatus(id, event.currentTarget.checked);
        },
        [id, toggleStatus],
    );

    return (
        <li className={classNames('', { [cls.done]: isDone }, [className])}>
            <input
                type="checkbox"
                checked={isDone}
                onChange={toggleStatusHandler}
            />
            <span>{title}</span>
            <button type="button" onClick={clickHandler}>
                x
            </button>
        </li>
    );
});
