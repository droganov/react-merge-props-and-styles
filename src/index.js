import trim from 'lodash.trim';

const concat = (...classNames) => classNames.map(trim).join(' ');
const merge = (a, b) => {
  const className = b.className ? concat(a.className, b.className) : a.className;
  const style = { ...a.style, ...b.style };
  return {
    ...a,
    ...b,
    className,
    style,
  };
};

export default (...props) => props.reduce(merge, { className: '', style: {} });
