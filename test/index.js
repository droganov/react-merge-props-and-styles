import chai from 'chai';
import merge from '../src';

chai.should();

const propsA = {
  className: 'classA',
  style: { cursor: 'pointer' },
  big: true,
};

const propsB = {
  className: 'classB',
  style: { display: 'block' },
  strong: true,
};

const propsC = {
  style: { display: 'none' },
};

const result = {
  className: 'classA classB',
  style: {
    cursor: 'pointer',
    display: 'none',
  },
  big: true,
  strong: true,
}

describe('merge', () => {
  it('concats class names, merges styles and props', () =>
    merge(propsA, propsB, propsC)
      .should
      .deep
      .equal(result),
  )
});
