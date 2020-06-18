import {
  error,
  Stack,
  defaultModules,
} from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';

defaultModules.set(PNotifyMobile, {});

export const customStack = new Stack({
  dir1: 'right',
});

// export const notifyError = error({
//   text: 'Too many matches found. Please enter a more specific query!',
//   addClass: 'pnotify',
//   closerHover: true,
//   closer: false,
//   sticker: false,
//   stack: customStack,
// });

// alert('Notice me, senpai!');

// import { defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
// import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
// // import { error } from '@pnotify/core';

// import '@pnotify/core/dist/BrightTheme.css';

// defaultModules.set(PNotifyMobile, {});

// // export const notifyError = error({
// //   title: 'Too many matches found. Please enter a more specific query!',
// // });
