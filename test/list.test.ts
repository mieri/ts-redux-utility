import {expect} from 'chai';
import {wrap} from '../src/functions/list';
import {IList} from '../src';

describe('List wrapper', () => {
  const testList: IList<string> = {a: 'a', b: 'b', c: 'c'};
  it('should map correctly', () => {
    const initial = wrap(testList);

    const result = initial.map(item => item.toUpperCase()).list;

    expect(result).to.deep.equal({a: 'A', b: 'B', c: 'C'});
  });

  it('should filter correctly', () => {
    const initial = wrap(testList);

    const result = initial.filter(([key, value]) => value !== 'a').list;

    expect(result).to.deep.equal({b: 'b', c: 'c'});
  });
});
