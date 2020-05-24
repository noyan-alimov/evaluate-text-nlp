import { evaluateText } from './js/scripts';
import './styles/styles.scss';

const form = document.querySelector('.form-input');

form.addEventListener('submit', e => {
  e.preventDefault();
  evaluateText();
});
