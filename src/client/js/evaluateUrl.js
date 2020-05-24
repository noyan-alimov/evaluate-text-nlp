import { checkInput } from './checkInput';

export const evaluateUrl = () => {
  const url = document.querySelector('#text').value;
  const isUrl = checkInput(url);

  if (!isUrl) {
    alert('Please enter a valid url');
    console.log('Not valid url has been entered');
  }

  return fetch('http://localhost:8081/evaluate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url })
  })
    .then(res => res.json())
    .then(data => {
      const output = document.querySelector('.response-output');
      const {
        polarity,
        polarity_confidence,
        subjectivity,
        subjectivity_confidence,
        text
      } = data.data;
      output.innerHTML = `Polarity: ${polarity} <br/>
      Polarity Confidence: ${polarity_confidence} <br/>
      Subjectivity: ${subjectivity} <br/>
      Subjectivity Confidence: ${subjectivity_confidence} <br/>
      Your Text: ${text}`;
    });
};
