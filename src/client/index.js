import { evaluateUrl } from './js/evaluateUrl';
import './styles/styles.scss';

const form = document.querySelector('.form-input');

form.addEventListener('submit', e => {
  e.preventDefault();
  evaluateUrl();
});
