import './services/axios';
import debounce from 'lodash.debounce';

import fetchCountry from './services/axios';
import listTmp from './templates/list.hbs';
import singleCounrtyTmp from './templates/country.hbs';
import './styles.css';

import {
  error,
  Stack,
  defaultModules,
} from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';

defaultModules.set(PNotifyMobile, {});
import '@pnotify/core/dist/BrightTheme.css';

// import './pnotify';
// import { error } from '@pnotify/core';
// import { notifyError } from './pnotify';

const refs = {
  input: document.querySelector('#countryInput'),
  list: document.querySelector('.countryList'),
};

refs.input.addEventListener('input', debounce(inputHandler, 500));

function inputHandler(e) {
  console.log(e.target.value);
  const querry = e.target.value;
  if (querry.length !== 0) {
    fetchCountry(querry).then(data => {
      console.log(data);

      if (data.length > 10) {
        // const errorStack = new Stack({
        //   dir1: 'right',
        //   dir2: 'right',
        // });

        error({
          text: 'Too many matches found. Please enter a more specific query!',
          addClass: 'pnotify',
          icon: false,
          closerHover: true,
          closer: false,
          sticker: false,
          delay: 40000,
          stack: new Stack({
            dir1: 'right',
            dir2: 'right',
          }),
        });
      }

      if (data.length > 1 && data.length <= 10) {
        refs.list.innerHTML = '';
        const markup = data.map(country => listTmp(country)).join('');
        console.log(markup);
        refs.list.insertAdjacentHTML('beforeend', markup);
        notifyError.close(immdeiate);
      }

      if (data.length === 1) {
        refs.list.innerHTML = '';
        const markup = singleCounrtyTmp(data[0]);
        console.log(markup);
        refs.list.insertAdjacentHTML('beforeend', markup);
        notifyError.close(immdeiate);
      }
    });
  }
}
