import get from './get';

const testObject = {
  a: 1,
  b: {
    c: 2,
  },
};

test('empty object', () => {
  expect(get({}, '')).toBe(undefined);
  expect(get({}, 'a')).toBe(undefined);
});

test('Normal Object', () => {
  expect(get(testObject, 'a')).toEqual(1);
  expect(get(testObject, 'b')).toEqual({
    c: 2,
  });
});
