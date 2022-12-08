import { jest } from '@jest/globals';

import getSecondsOfThisYearUntilNow from '../solutions/getSecondsOfThisYearUntilNow';

describe('getSecondsOfThisYearUntilNow() ', () => {
  test('should return seconds of this year until now', () => {
    const from = new Date(2021, 0, 1);
    const now = new Date(2021, 10, 12, 2, 23, 23);
    global.Date = jest.fn(() => from);
    global.Date.now = jest.fn(() => now);
    global.Date.prototype.getFullYear = jest.fn(() => 2021);

    expect(getSecondsOfThisYearUntilNow()).toBe(27224603);
  });

  test('should return 0 if this is exactly the new year', () => {
    const from = new Date(2021, 0, 1);
    const now = new Date(2021, 0, 1);
    global.Date = jest.fn(() => from);
    global.Date.now = jest.fn(() => now);
    global.Date.prototype.getFullYear = jest.fn(() => 2021);

    expect(getSecondsOfThisYearUntilNow()).toBe(0);
  });
});
