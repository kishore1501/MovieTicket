import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineBlack900:
    "bg-cyan_900 outline outline-[1px] outline-black_900 text-black_900",
};
const sizes = {
  sm: "lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] p-[22px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className}  ${variants[variant] || ""} ${
        sizes[size] || ""
      } common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(["OutlineBlack900"]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = { className: "", variant: "OutlineBlack900", size: "sm" };

export { Button };
