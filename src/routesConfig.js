import { lazy } from 'react';

export const POMODORO_URL = '/pomodoro';
export const ECOMMERCE_URL = '/ecommerce';
export const PIANO_URL = '/piano';
export const KEYBOARD_URL = '/keyboard';

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

const keyboard = {
  element: lazy(() => import(`components/Keyboard`)),
  path: 'keyboard',
};

export const routes = [pomodoro, ecommerce, piano, keyboard];
