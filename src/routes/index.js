import DefaultLayout from '~/components/layout/DefaultLayout';
import HeaderOnly from '~/components/layout/HeaderOnly';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';

const publicRoutes = [
  { path: '/', component: Home, layout: DefaultLayout },
  { path: '/following', component: Following, layout: DefaultLayout },
  { path: '/upload', component: Upload, layout: HeaderOnly }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
