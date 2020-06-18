import './services/axios';
import debounce from 'lodash.debounce';

import fetchCountry from './services/axios';
// import { error } from '@pnotify/core';
import './pnotify';
import listTmp from './templates/list.hbs';
import singleCounrtyTmp from './templates/country.hbs';
import './styles.css';

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
        const notifyError = error({
          text: 'Too many matches found. Please enter a more specific query!',
          addClass: 'pnotify',
          closerHover: true,
          closer: false,
          sticker: false,
          stack: customStack,
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
