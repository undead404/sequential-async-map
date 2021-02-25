import sequentialAsyncMap from '../index';

describe('sequentialAsyncMap', () => {
  it('succeeds on an empty array', async () => {
    const f = jest.fn();

    await sequentialAsyncMap([], f);

    expect(f).toHaveBeenCalledTimes(0);
  });
  it('succeeds on an array with only one element', async () => {
    const square = jest.fn().mockImplementation((item: number) => {
      return Promise.resolve(item * item);
    });

    const result = await sequentialAsyncMap([0], square);

    expect(result).toEqual([0]);
    expect(square).toHaveBeenCalledTimes(1);
  });
  it('succeeds on an array with three elements', async () => {
    const square = jest.fn().mockImplementation((item: number) => {
      return Promise.resolve(item * item);
    });

    const result = await sequentialAsyncMap([0, 1, 2], square);

    expect(result).toEqual([0, 1, 4]);
    expect(square).toHaveBeenCalledTimes(3);
  });
});
