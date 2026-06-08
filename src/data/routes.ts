export interface Route {
  label: string;
  path: string;
  index?: boolean;
}

const routes: Route[] = [
  {
    index: true,
    label: 'Chibuzor Anthony Enyioko',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Resume',
    path: '/resume',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
  {
    label: 'Archive',
    path: '/projects',
  },
];

export default routes;
