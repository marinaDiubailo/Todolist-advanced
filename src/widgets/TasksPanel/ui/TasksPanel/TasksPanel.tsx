/* eslint-disable i18next/no-literal-string */
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
// import cls from './TasksPanel.module.scss';
import { AddTodo } from '@/features/AddTodo';
import { ITodo, Todolist } from '@/entities/Todo';
import { FilterType, TodoFilters } from '@/features/TodoFilters';

interface TasksPanelProps {
    className?: string;
    id: string;
    title: string;
    onAddTask: (title: string, todolistId: string) => void;
    onRemoveTask: (todoId: string, todolistId: string) => void;
    tasksForTodolist: ITodo[];
    onToggleStatus: (
        todoId: string,
        isDone: boolean,
        todolistId: string,
    ) => void;
    onChangeFilter: (value: FilterType, todolistId: string) => void;
    filter: FilterType;
    onRemoveTodoList: (id: string) => void;
}

export const TasksPanel = memo((props: TasksPanelProps) => {
    const {
        className,
        title,
        onAddTask,
        onRemoveTask,
        tasksForTodolist,
        onToggleStatus,
        onChangeFilter,
        filter,
        id,
        onRemoveTodoList,
    } = props;

    const removeTodoListHandler = useCallback(() => {
        onRemoveTodoList(id);
    }, [onRemoveTodoList, id]);

    return (
        <div
            className={classNames('', {}, [className])}
            style={{ background: 'yellow', border: 'red', maxWidth: '500px' }}
        >
            <h2>{title}</h2>
            <button type="button" onClick={removeTodoListHandler}>
                Delete
            </button>
            <AddTodo onAddTodo={onAddTask} todolistId={id} />
            <Todolist
                todolistId={id}
                onRemoveTodo={onRemoveTask}
                todos={tasksForTodolist}
                onToggleStatus={onToggleStatus}
            />
            <TodoFilters
                onChangeFilter={onChangeFilter}
                filter={filter}
                todolistId={id}
            />
        </div>
    );
});
