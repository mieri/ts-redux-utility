# ts-redux-utility

## About

Simple functions to make it easier to work with redux like reducers.

Never mutates input, returns new object based on input.  
Will not return a new object if no changes where applied.

## `IList<T>` functions

### `filter` 
Filter an IList\<T\>
```typescript
const initial: IList<number> = { a: 1, b: 2, c: 3 };
const result = filter(initial, item => item > 1);
console.log(result) // { b:2, c:3 };
```


### `map`
Comparable to an array.map() for IList\<T\>
```typescript
const initial = { a: 1, b: 2, c: 3 };
const result = map(initial, (item) => item * 2);
console.log(result); // { a: 2, b: 4, c: 6 }
```

### `partialSet`
Partially update properties of an IList\<T\>.
```typescript
const initial: IList<{ a: string; b: string }> = {
    first: { a: "first-a", b: "first-b" },
    second: { a: "second-a", b: "second-b" },
};

const result1 = partialSet(initial, { a: "new value" });
console.log(result1); /* {
    first: {
        a: 'new value', b: 'first-b'
    },
    second: {
        a: 'new value', b: 'second-b'
    }
} */

const result2 = partialSet(initial, (item) => ({ a: `Appended ${item.a}` }));
console.log(result1); /* {
    first: {
        a: 'Appended first-a', b: 'first-b'
    },
    second: {
        a: 'Appended second-a', b: 'second-b'
    }
} */
```

---

## Other

### `recursiveSet`
Recursively set an objects values/subvalues and if any change has been applied return new object with the changes.

Example 1: Change property b from 2 -> 4

```typescript
const initial = { a: 1, b: 2, c: 3 };
const change = { b: 4 };
const result = recursiveSet(initial, change);

console.log(result); // { a: 1, b: 4, c: 3 }
console.log(initial === result); // false, object had a change applied so it's replaced.
```

Example 2: Change inner object a´s property b from 2 -> 4

```typescript
const c = { value: 1 };
const initial = { a: { b: 2 }, c };
const change = { a: { b: 4 } };
const result = recursiveSet(initial, change);

console.log(result); // { a: { b: 4 }, c: 1 }
console.log(c === result.c); // true, c was never changed so the same object is used.
```

Example 3: No changes

```typescript
const initial = { a: 1 };
const change = {};
const result = recursiveSet(initial, change);

console.log(result); // { a: 1 }
console.log(initial === result); // true, no changes applied so initial object is returned.
```

---