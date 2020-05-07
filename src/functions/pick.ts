export function pick<T, K extends keyof T>(item: T, ...keys: K[]): Pick<T, K> {
  return keys.reduce<any>((acc, key) => ({...acc, [key]: item[key]}), {});
}
