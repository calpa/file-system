import humanFileSize from './humanFileSize';

const mapping = {
  '-1': 0,
  0: 0,
  1: '1 B',
  500: '500 B',
  959: '959 B',
  1024: '1 kB',
  1e10: '9.31 GB',
  3e12: '2.73 TB',
  1e15: '909.49 TB',
};

describe('humanFileSize', () => {
  test.each(Object.entries(mapping))(
    'given the file size: %d B',
    (key, value) => expect(humanFileSize(key)).toEqual(value)
  );
});
