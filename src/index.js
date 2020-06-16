import './services/axios';
import debounce from 'lodash.debounce';

import fetchCountry from './services/axios';
import './pnotify';
import './styles.css';
import { error } from '@pnotify/core';

// import { notifyError } from './pnotify';

const refs = {
  input: document.querySelector('#countryInput'),
};

refs.input.addEventListener('input', debounce(inputHandler, 500));

function inputHandler(e) {
  console.log(e.target.value);
  const querry = e.target.value;
  if (querry.length !== 0) {
    fetchCountry(querry).then(data => {
      console.log(data);
      if (data.length > 10) {
        // notifyError;
        const notifyError = error({
          title: 'Too many matches found. Please enter a more specific query!',
        });
      }
    });
  }
}
