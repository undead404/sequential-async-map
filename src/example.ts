import sequentialAsyncMap from './index';

(async () => {
    console.info(await sequentialAsyncMap([1, 2, 3], (item: number) => Promise.resolve(item * item)));
})()