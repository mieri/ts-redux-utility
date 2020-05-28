import {IList} from '..';
import {filter} from './list/filter';
import {map} from './list/map';
import {partialSet} from './list/partialSet';

// TODO: Create a wrapper so functions can be chained
export function wrap<T>(list: IList<T>) {
  const wrapped = {
    list,
    filter: (fn: ([key, value]: [string, T]) => boolean) =>
      wrap(filter(list, fn)),
    map: <F extends (item: T) => any>(fn: F) => wrap(map(list, fn)),
    partialSet: (input: Partial<T> | ((item: T) => Partial<T>)) =>
      wrap(partialSet(list, input)),
  };

  return wrapped;
}

const list = {a: 'string', b: 'something', c: 'else'};
const wrapped = wrap(list);
wrapped.map(item => item.toLocaleUpperCase());
console.log(wrapped.list);
