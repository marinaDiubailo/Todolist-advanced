/* eslint-disable i18next/no-literal-string */
import { memo, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserMounted, initAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { AppRouter } from './providers/Router';
import { classNames } from '@/shared/lib/classNames/classNames';

export const App = memo(() => {
    const dispatch = useAppDispatch();
    const mounted = useSelector(getUserMounted);
    useEffect(() => {
        if (!mounted) {
            dispatch(initAuthData());
        }
    }, [dispatch, mounted]);

    if (!mounted) {
        return (
            <div id="app" className={classNames('app-redesigned', {}, [])}>
                Loading...
            </div>
        );
    }
    return (
        <div id="app" className={classNames('', {}, [])}>
            <Suspense fallback="">
                <MainLayout
                    header={<div />}
                    content={<AppRouter />}
                    sidebar={<div />}
                />
            </Suspense>
        </div>
    );
});
