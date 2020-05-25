import { evaluateUrl } from './evaluateUrl';

window.fetch = jest.fn().mockImplementation(() => {
  return Promise.resolve({
    json: () =>
      Promise.resolve({
        polarity: 'positive',
        subjectivity: 'subjective',
        text: 'The example'
      })
  });
});

describe('evaluateUrl', () => {
  test('Fetches with a POST request, gets data and displays in UI via innerHTML', () => {
    document.body.innerHTML = `
    <div class="container">
    <h3 class="title">This app evaluates articles</h3>
    <div class="input">
      <form class="form-input">
        <label for="text"
          >Please enter a URL here and make sure that there is no space before
          URL:</label
        >
        <textarea class="text-input" id="text" rows="4" cols="50"> </textarea>
        <input type="submit" class="button" value="SUBMIT" />
      </form>
    </div>
    <div class="api-output">
      <h4 class="description">Output:</h4>
      <div class="response-output"></div>
    </div>
  </div>
    `;
    const urlInput = document.querySelector('#text');
    const response = document.querySelector('.response-output');

    urlInput.value = 'http://example.com';
    evaluateUrl().then(() => {
      expect(response.innerHTML).toEqual(`Polarity: positive <br/>
      Subjectivity: subjective <br/>
      Your Text: The example`);
    });
  });
});
