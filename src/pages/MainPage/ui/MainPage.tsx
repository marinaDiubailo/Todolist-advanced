/* eslint-disable i18next/no-literal-string */
// import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { v4 } from 'uuid';
import { FilterType } from '@/features/TodoFilters';
import { Page } from '@/widgets/Page';
import { ITodo } from '@/entities/Todo';
import { TasksPanel } from '@/widgets/TasksPanel';

type TodoListType = {
    id: string;
    title: string;
    filter: FilterType;
};

type TasksObjType = {
    [id: string]: ITodo[];
};

const todoList1 = v4();
const todoList2 = v4();

const MainPage = () => {
    const [todoLists, setTodoLists] = useState<TodoListType[]>([
        { id: todoList1, title: 'What to learn', filter: 'all' },
        { id: todoList2, title: 'What to buy', filter: 'all' },
    ]);

    const [tasksObj, setTasksObj] = useState<TasksObjType>({
        [todoList1]: [
            { id: v4(), title: 'Learn React', isDone: false },
            { id: v4(), title: 'Learn html', isDone: false },
            { id: v4(), title: 'Learn css', isDone: true },
            { id: v4(), title: 'Learn sass', isDone: true },
            { id: v4(), title: 'Learn Js', isDone: false },
            { id: v4(), title: 'Learn Next', isDone: false },
        ],
        [todoList2]: [
            { id: v4(), title: 'Milk', isDone: false },
            { id: v4(), title: 'Bread', isDone: false },
            { id: v4(), title: 'Chocolate', isDone: true },
        ],
    });

    const removeTask = useCallback(
        (id: string, todolistId: string) => {
            const tasks = tasksObj[todolistId];
            const filteredTasks = tasks.filter((task) => task.id !== id);
            tasksObj[todolistId] = filteredTasks;
            setTasksObj({ ...tasksObj });
        },
        [tasksObj],
    );

    const addTask = useCallback(
        (title: string, todolistId: string) => {
            const task = { id: v4(), title, isDone: false };
            const tasks = tasksObj[todolistId];
            const newTasks = [task, ...tasks];
            tasksObj[todolistId] = newTasks;
            setTasksObj({ ...tasksObj });
        },
        [tasksObj],
    );

    const changeFilter = useCallback(
        (value: FilterType, todolistId: string) => {
            const todoList = todoLists.find((list) => list.id === todolistId);
            if (todoList) {
                todoList.filter = value;
                setTodoLists([...todoLists]);
            }
        },
        [todoLists],
    );

    const toggleStatus = useCallback(
        (id: string, isDone: boolean, todolistId: string) => {
            const tasks = tasksObj[todolistId];
            const task = tasks.find((task) => task.id === id);
            if (task) {
                task.isDone = isDone;
                setTasksObj({ ...tasksObj });
            }
        },
        [tasksObj],
    );

    const removeTodoList = useCallback(
        (todolistId: string) => {
            const filteredTodolists = todoLists.filter(
                (list) => list.id !== todolistId,
            );
            setTodoLists(filteredTodolists);
            delete tasksObj[todolistId];
            setTasksObj(tasksObj);
        },
        [todoLists, tasksObj],
    );

    return (
        <Page data-testid="MainPage">
            {todoLists.map((list) => {
                let tasksForTodolist = tasksObj[list.id];

                if (list.filter === 'active') {
                    tasksForTodolist = tasksForTodolist.filter(
                        (task) => !task.isDone,
                    );
                }

                if (list.filter === 'completed') {
                    tasksForTodolist = tasksForTodolist.filter(
                        (task) => task.isDone,
                    );
                }
                return (
                    <TasksPanel
                        id={list.id}
                        key={list.id}
                        title={list.title}
                        onAddTask={addTask}
                        onRemoveTask={removeTask}
                        tasksForTodolist={tasksForTodolist}
                        onToggleStatus={toggleStatus}
                        onChangeFilter={changeFilter}
                        filter={list.filter}
                        onRemoveTodoList={removeTodoList}
                    />
                );
            })}
        </Page>
    );
};

export default MainPage;
