import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import AppRouter from './AppRouter';
import { getRouteMain } from '@/shared/const/router';

describe('AppRouter.test', () => {
    test('Page should be rendered', async () => {
        componentRender(<AppRouter />, {
            route: getRouteMain(),
        });

        const page = await screen.findByTestId('MainPage');

        expect(page).toBeInTheDocument();
    });

    test('Page not found', async () => {
        componentRender(<AppRouter />, {
            route: '/not-real',
        });

        const page = await screen.findByTestId('NotFoundPage');

        expect(page).toBeInTheDocument();
    });
});
