import { lazy } from 'react';

export const POMODORO_URL = '/pomodoro';
export const ECOMMERCE_URL = '/ecommerce';
export const PIANO_URL = '/piano';
export const KEYBOARD_URL = '/keyboard';
export const PODCAST_URL = '/podcast';

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

const podcast = {
  element: lazy(() => import(`components/Podcast`)),
  path: 'podcast',
};

export const routes = [pomodoro, ecommerce, piano, keyboard, podcast];
