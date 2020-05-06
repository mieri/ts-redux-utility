# ts-redux-utility

## About

Simple functions to make it easier to work with redux like reducers.

Never mutates input, returns new object based on input.  
Will not return a new object if no changes where applied.

## Functions

### `recursiveSet`
Recursively set an objects values/subvalues and if any change has been applied return new object with the changes.

Example 1: Change property b from 2 -> 4
```typescript
const initial = { a: 1, b: 2, c: 3 };
const change = { b: 4 };
const result = recursiveSet(intitial, change);

console.log(result) // { a: 1, b: 4, c: 3 }
```

Example 2: Change inner object a´s property b from 2 -> 4
```typescript
const initial = { a: { b: 2 }, c: 1 };
const change = { a: { b: 4 } };
const result = recursiveSet(intitial, change);

console.log(result) // { a: { b: 4 }, c: 1 }
```