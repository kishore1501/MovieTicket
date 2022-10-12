import React from "react";
const variantClasses = {
  h1: "font-normal 3xl:text-[115px] text-[128px] lg:text-[68px] xl:text-[85px] 2xl:text-[96px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
