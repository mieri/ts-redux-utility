// export interface IList2<T extends {}, K extends Extract<keyof T, string>> {
//   [key: K]: T;
// }

export interface IList<T> {
  [key: string]: T;
}
