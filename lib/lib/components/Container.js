function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import clsx from 'clsx';
export function Container({
  className,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)
  }, props));
}