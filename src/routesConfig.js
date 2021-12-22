import { lazy } from 'react';

export const POMODORO_URL = '/pomodoro';
export const ECOMMERCE_URL = '/ecommerce';
export const PIANO_URL = '/piano';

const pomodoro = {
  element: lazy(() => import(`components/Pomodoro`)),
  path: 'pomodoro',
};

const ecommerce = {
  element: lazy(() => import(`components/ECommerce`)),
  path: 'ecommerce',
};

const piano = {
  element: lazy(() => import(`components/Piano`)),
  path: 'piano',
};

export const routes = [pomodoro, ecommerce, piano];
