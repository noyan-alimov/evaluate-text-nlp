import { evaluateText } from './js/scripts';
import './styles/styles.scss';

const form = document.querySelector('.form-input');

form.addEventListener('submit', e => {
  e.preventDefault();
  const text = document.querySelector('#text').value;
  const output = document.querySelector('.response-output');

  const res = fetch('http://localhost:8081/evaluate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  });
  const data = res.json();
  console.log(data);
});
