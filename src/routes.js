import App from './App';
import Registration from './components/Registration/Registration';

export const routes = [
  {
    path: '/',
    component: App,
  },
  {
    path: '/signup',
    component: Registration,
  },
];
