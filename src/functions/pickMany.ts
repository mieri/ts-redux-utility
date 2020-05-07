import {IList} from '../interfaces/list';
import {pick} from './pick';

export function pickMany<T, K extends keyof T>(
  dictionary: IList<T>,
  ...keys: K[]
): IList<Pick<T, K>> {
  return Object.entries(dictionary).reduce<any>((acc, [key, item]) => {
    return {...acc, [key]: pick(item, ...keys)};
  }, dictionary);
}
