/* eslint-disable i18next/no-literal-string */
import { ChangeEvent, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ITodo } from '../../model/types/todo';
import cls from './Todo.module.scss';

interface TodoProps {
    className?: string;
    todolistId: string;
    todo: ITodo;
    removeTodo: (todoId: string, todolistId: string) => void;
    toggleStatus: (todoId: string, isDone: boolean, todolistId: string) => void;
}

export const Todo = memo((props: TodoProps) => {
    const { className, todo, removeTodo, toggleStatus, todolistId } = props;
    const { title, isDone, id } = todo;

    const clickHandler = useCallback(() => {
        removeTodo(id, todolistId);
    }, [removeTodo, id, todolistId]);

    const toggleStatusHandler = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            toggleStatus(id, event.currentTarget.checked, todolistId);
        },
        [id, toggleStatus, todolistId],
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
