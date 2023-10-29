import { fetchData, fetchError, sumFunction } from '../TestUtils';

describe('Basic unit tests for JS functions', () => {
  //assertion (asercja)
  test('should return proper result', () => {
    expect(sumFunction(1, 3)).toBe(4);
  });

  test('should return null if the parans are undefined', () => {
    expect(sumFunction()).toBe(null);
  });
});

describe('Basic unit test for JS Promises', () => {
  //assertion (asercja)
  test('should return proper Promise result', () => {
    return fetchData().then((data) => {
      expect(data).toStrictEqual([
        { data: 'Data from the server' },
        { data: 'Data from the server version 2' },
      ]);
    });
  });

  test('should return proper error message during fetching()', () => {
    return fetchError().catch((data) => {
      expect(data).toStrictEqual([{ data: 'There was an error' }]);
    });
  });
});
