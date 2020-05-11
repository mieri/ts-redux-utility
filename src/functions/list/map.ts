import {IList} from '../../interfaces/list';

export function map<T, F extends (item: T) => any>(
  items: IList<T>,
  fn: F
): IList<ReturnType<F>> {
  const result = Object.entries(items).reduce((acc, [key, item]) => {
    return {...acc, [key]: fn(item)};
  }, {});
  return result;
}
