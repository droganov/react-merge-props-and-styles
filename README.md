## How to use
```javascript
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

merge(propsA, propsB, propsC);
```

## The result
```javascript
const result = {
  className: 'classA classB',
  style: {
    cursor: 'pointer',
    display: 'none',
  },
  big: true,
  strong: true,
}
```
