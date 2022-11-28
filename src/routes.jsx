import loadable, { lazy } from '@loadable/component';

import Loader from '@layout/Loader';

const Main = loadable(() => import('./pages'), { fallback: <Loader /> });
const NotificationRegistration = lazy(
    () => import('./pages/notification/Registration'),
    {
        fallback: <Loader />,
    },
);
const Admin = lazy(() => import('.'), {
    fallback: <Loader />,
});

const routes = [
    {
        path: '/',
        exact: true,
        component: Main,
    },
    {
        path: '/notification/registration',
        exact: true,
        component: NotificationRegistration,
    },
    {
        path: '/admin',
        exact: true,
        component: Admin,
    },
];

export default routes;