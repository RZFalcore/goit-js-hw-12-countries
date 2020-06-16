import { defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
// import { error } from '@pnotify/core';

import '@pnotify/core/dist/BrightTheme.css';

defaultModules.set(PNotifyMobile, {});

// export const notifyError = error({
//   title: 'Too many matches found. Please enter a more specific query!',
// });
