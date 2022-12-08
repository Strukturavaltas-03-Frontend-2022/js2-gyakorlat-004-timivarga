import countOfWorkingDays from '../solutions/countOfWorkingDays';

describe('countOfWorkingDays ', () => {
  test('should return the number of working days between two date: 215', () => {
    const from = new Date(2021, 0, 1);
    const to = new Date(2021, 9, 28);

    expect(countOfWorkingDays(from, to)).toBe(215);
  });

  test('should return 1 if the date is the first day of the year', () => {
    const from = new Date(2021, 0, 1);
    const to = new Date(2021, 0, 1);

    expect(countOfWorkingDays(from, to)).toBe(1);
  });

  test('should throw an error if first parameter is earlier date, than second!', () => {
    const from = new Date(2021, 10, 1);
    const to = new Date(2021, 9, 1);

    expect(() => countOfWorkingDays(from, to)).toThrowError('The first parameter is earlier date, than second!');
  });
});
