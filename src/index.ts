/**
 *
 * @param {T1[]} collection A collection of items to apply f sequentially, item by item
 * @param {(item: T1, index: number, list: T1[]) => Promise<T2>} f An async action to apply to items of the collection
 * @returns {Promise<T2[]>} Results of executions, collected in an array
 */

export default function sequentialAsyncMap<T1, T2>(
  collection: T1[],
  f: (item: T1, index: number, list: T1[]) => Promise<T2>,
): Promise<T2[]> {
  const a = Array.prototype.slice.call(collection, 0);
  throw new Error('Test error');
  return a.reduce(
    async (accumulator, item, index, list) => [...(await accumulator), await f(item, index, list)],
    new Promise((resolve) => resolve([] as T2[])),
  );
}
