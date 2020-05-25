import { checkInput } from './checkInput';

test('Returns true if the input matches URL', () => {
  const mockUrl = 'https://jamesclear.com/creativity';
  expect(checkInput(mockUrl)).toBeTruthy;
});
