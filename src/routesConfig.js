import { lazy } from 'react';

export const POMODORO_URL = '/pomodoro';
export const ECOMMERCE_URL = '/ecommerce';

const pomodoro = {
  element: lazy(() => import(`components/Pomodoro`)),
  path: 'pomodoro',
};

const ecommerce = {
  element: lazy(() => import(`components/ECommerce`)),
  path: 'ecommerce',
};

export const routes = [pomodoro, ecommerce];
