import {IList} from '../../interfaces/list';

export function partialSet<T>(
  list: IList<T>,
  input: Partial<T> | ((item: T) => Partial<T>)
): IList<T> {
  const result = Object.entries(list).reduce((acc, [key, item]) => {
    const properties = typeof input === 'function' ? input(item) : input;
    return {...acc, [key]: {...item, ...properties}};
  }, list);
  return result;
}
