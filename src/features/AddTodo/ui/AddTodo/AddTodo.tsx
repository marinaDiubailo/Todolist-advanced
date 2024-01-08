/* eslint-disable i18next/no-literal-string */
import { ChangeEvent, KeyboardEvent, memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AddTodo.module.scss';

interface AddTodoProps {
    className?: string;
    onAddTodo: (title: string, todolistId: string) => void;
    todolistId: string;
}

export const AddTodo = memo((props: AddTodoProps) => {
    const { className, onAddTodo, todolistId } = props;
    const [title, setTitle] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const addTodoHandler = useCallback(() => {
        if (!title.trim()) {
            setError('Should not be empty!');
            return;
        }
        onAddTodo(title.trim(), todolistId);
        setTitle('');
    }, [onAddTodo, title, todolistId]);

    const onChangeHandler = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            setTitle(event.currentTarget.value);
        },
        [],
    );

    const onKeyPressHandler = useCallback(
        (event: KeyboardEvent<HTMLInputElement>) => {
            setError(null);
            if (event.code === 'Enter') {
                addTodoHandler();
            }
        },
        [addTodoHandler],
    );

    return (
        <div className={classNames('', {}, [className])}>
            <input
                className={classNames('', { [cls.error]: error as string }, [
                    className,
                ])}
                value={title}
                placeholder="enter your todo here.."
                onChange={onChangeHandler}
                onKeyDown={onKeyPressHandler}
            />
            <button type="button" onClick={addTodoHandler}>
                +
            </button>
            {error && <div className={cls['error-message']}>{error}</div>}
        </div>
    );
});
