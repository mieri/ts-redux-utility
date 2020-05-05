import {RecursivePartial} from '../types/RecursivePartial';

export function recursiveSet<T>(target: T, properties: RecursivePartial<T>): T {
  let result = {...target};

  for (let key in result) {
    const value = properties[key];

    if (typeof value === 'undefined') continue;

    if (typeof value === 'object' && !Array.isArray(value)) {
      // @ts-ignore: Even though we check for undefined you cannot set Partial<T> as T
      const innerResult = recursiveSet(result[key], value);
      result[key] = {
        ...result[key],
        ...innerResult,
      };
    } else {
      // @ts-ignore
      result[key] = value;
    }
  }

  return result;
}
