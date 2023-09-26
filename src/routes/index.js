import DefaultLayout from '~/layouts/DefaultLayout';
import HeaderOnly from '~/layouts/HeaderOnly';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Explore from '~/pages/Explore';
import Live from '~/pages/Live';
import Config from '~/config';

const publicRoutes = [
  { path: Config.routesConfig.home, component: Home, layout: DefaultLayout },
  { path: Config.routesConfig.following, component: Following, layout: DefaultLayout },
  { path: Config.routesConfig.upload, component: Upload, layout: HeaderOnly },
  { path: Config.routesConfig.explore, component: Explore, layout: DefaultLayout },
  { path: Config.routesConfig.live, component: Live, layout: DefaultLayout },

  { path: '*', layout: HeaderOnly }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
