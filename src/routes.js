import loadable, { lazy } from '@loadable/component';

import Loader from '@layout/Loader';

const Main = loadable(() => import('./pages'));
const Detail = lazy(() => import('./'), {
    fallback: <Loader />,
});
const PostAdd = lazy(() => import('./'), {
    fallback: <Loader />,
});

const routes = [
    { path: '/', exact: true, name: 'Main', component: Main },
    /* { path: '/detail', exact: true, name: 'Detail', component: Detail },
    { path: '/postadd', exact: true, name: 'Post Add', component: PostAdd }, */
];

export default routes;
