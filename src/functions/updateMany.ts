import {IList} from '../interfaces/list';

export function updateMany<T>(
  dictionary: IList<T>,
  input: Partial<T> | ((item: T) => Partial<T>),
  filter?: (item: T) => boolean
): IList<T> {
  const result = Object.entries(dictionary).reduce((acc, [key, item]) => {
    const properties = typeof input === 'function' ? input(item) : input;
    if (filter && !filter(item)) return acc;
    return {...acc, [key]: {...item, ...properties}};
  }, dictionary);
  return result;
}
