import {RecursivePartial} from '../types/RecursivePartial';

export function recursiveSet<T extends {}>(
  target: T,
  properties: RecursivePartial<T>
): T {
  let result = target;

  for (const key in result) {
    const currentValue = properties[key];

    if (typeof currentValue === 'undefined') continue;

    if (typeof currentValue === 'object' && !Array.isArray(currentValue)) {
      const resultValue = result[key];
      // @ts-ignore: Even though we check for undefined you cannot set Partial<T> as T
      const innerResult = recursiveSet(resultValue, currentValue);
      if (innerResult === resultValue) continue;

      result = {
        ...result,
        [key]: {
          ...resultValue,
          ...innerResult,
        },
      };
    } else {
      // @ts-ignore
      result[key] = currentValue;
    }
  }

  return result;
}
