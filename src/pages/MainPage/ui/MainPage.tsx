// import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { v4 } from 'uuid';
import { AddTodo } from '@/features/AddTodo';
import { TodoFilters, FilterType } from '@/features/TodoFilters';
import { Page } from '@/widgets/Page';
import { ITodo, Todolist } from '@/entities/Todo';

const MainPage = () => {
    const [filter, setFilter] = useState<FilterType>('all');
    const [tasks, setTasks] = useState<ITodo[]>([
        { id: v4(), title: 'Learn React', isDone: false },
        { id: v4(), title: 'Learn html', isDone: false },
        { id: v4(), title: 'Learn css', isDone: true },
        { id: v4(), title: 'Learn sass', isDone: true },
        { id: v4(), title: 'Learn Js', isDone: false },
        { id: v4(), title: 'Learn Next', isDone: false },
    ]);

    const removeTask = useCallback(
        (id: string) => {
            const filteredTasks = tasks.filter((task) => task.id !== id);
            setTasks(filteredTasks);
        },
        [tasks],
    );

    const addTask = useCallback(
        (title: string) => {
            const task = { id: v4(), title, isDone: false };
            const newTasks = [task, ...tasks];
            setTasks(newTasks);
        },
        [tasks],
    );

    const changeFilter = useCallback((value: FilterType) => {
        setFilter(value);
    }, []);

    const toggleStatus = useCallback(
        (id: string, isDone: boolean) => {
            const task = tasks.find((task) => task.id === id);
            if (task) {
                task.isDone = isDone;
            }
            setTasks([...tasks]);
        },
        [tasks],
    );

    let tasksForTodolist = tasks;

    if (filter === 'active') {
        tasksForTodolist = tasks.filter((task) => !task.isDone);
    }

    if (filter === 'completed') {
        tasksForTodolist = tasks.filter((task) => task.isDone);
    }

    return (
        <Page data-testid="MainPage">
            <AddTodo onAddTodo={addTask} />
            <Todolist
                onRemoveTodo={removeTask}
                todos={tasksForTodolist}
                onToggleStatus={toggleStatus}
            />
            <TodoFilters onChangeFilter={changeFilter} filter={filter} />
        </Page>
    );
};

export default MainPage;
