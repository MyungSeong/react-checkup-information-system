import loadable, { lazy } from '@loadable/component';

import Loader from '@layout/Loader';

const Main = loadable(() => import('@pages/Main'), {
    fallback: <Loader />,
});

const NotificationRegistration = lazy(
    () => import('@pages/notification/Registration'),
    {
        fallback: <Loader />,
    },
);

const Admin = lazy(() => import('.'), {
    fallback: <Loader />,
});

const Error = lazy(() => import('@pages/404'));

const routes = [
    {
        path: '/',
        component: Main,
    },
    /* {
        path: 'notification',
        component: <></>,
    }, */
    {
        path: '/notification/registration',
        component: NotificationRegistration,
    },
    {
        path: '/admin',
        component: Admin,
    },
    {
        path: '*',
        component: Error,
    },
];

export default routes;
