import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ITodo } from '../../model/types/todo';
import { Todo } from '../Todo/Todo';
// import cls from './Todolist.module.scss';

interface TodolistProps {
    className?: string;
    todos: ITodo[];
    onRemoveTodo: (todoId: string) => void;
    onToggleStatus: (todoId: string, isDone: boolean) => void;
}

export const Todolist = memo((props: TodolistProps) => {
    const { className, todos, onRemoveTodo, onToggleStatus } = props;

    return (
        <ul className={classNames('', {}, [className])}>
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    removeTodo={onRemoveTodo}
                    toggleStatus={onToggleStatus}
                />
            ))}
        </ul>
    );
});
