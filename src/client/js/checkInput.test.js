import { checkInput } from './checkInput';

test('Returns true if the input matches URL', () => {
  expect(checkInput('https://jamesclear.com/creativity')).toBeTruthy;
});
