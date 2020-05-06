import {recursiveSet} from '../../src/functions/recursiveSet';
import {expect} from 'chai';

describe('Function recursiveSet', () => {
  it('should only change supplied properties', () => {
    const initial = {a: 1, b: 2, c: {c1: 3, c2: 4}};
    const change = {a: 5, c: {c1: 6}};

    const result = recursiveSet(initial, change);

    expect(result).to.deep.equal({a: 5, b: 2, c: {c1: 6, c2: 4}});
  });

  it('Should return initial object when there are no changes', () => {
    const initial = {};

    const result = recursiveSet(initial, {});

    expect(result).to.equal(initial);
  });

  it('Should return same inner object when that object has no changes', () => {
    const inner = {};
    const initial = {inner, other: {value: 1}};

    const {inner: innerResult} = recursiveSet(initial, {other: {value: 2}});

    expect(innerResult).to.equal(inner);
  });
});
