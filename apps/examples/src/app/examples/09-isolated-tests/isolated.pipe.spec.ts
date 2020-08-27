import { IsolatedPipe } from './isolated.pipe';

describe('IsolatedPipe', () => {
  const pipe = new IsolatedPipe();
  const exclamation = `Super happy to be here`;
  it('adds an exclamation mark to input', () => {
    expect(pipe.transform(exclamation)).toBe(`${exclamation}!`);
  });
});
