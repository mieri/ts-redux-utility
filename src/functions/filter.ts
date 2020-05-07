import {IList} from '../interfaces/list';

export function filter<T>(
  dictionary: IList<T>,
  filter: (entry: [string, T]) => boolean
): IList<T> {
  const result = Object.entries(dictionary)
    .filter(filter)
    .reduce((acc, [key, item]) => {
      return {...acc, [key]: item};
    }, {});
  return result;
}
