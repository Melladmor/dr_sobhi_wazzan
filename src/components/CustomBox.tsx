import React, { HTMLAttributes } from "react";

type Props<T = HTMLElement> = {
  children: React.ReactNode;
  withCustomBg?: boolean;
  htmlAttr?: HTMLAttributes<T>;
  className?: string;
};
const CustomBox: React.FC<Props> = ({
  children,
  withCustomBg,
  htmlAttr,
  className,
}) => {
  return (
    <section
      className={`custom_box_padding ${className} ${
        withCustomBg ? "custom_glass_effect" : ""
      } `}
      {...htmlAttr}>
      <div className={` ${withCustomBg ? "custom_glass_content" : ""} `}>
        {children}
      </div>
    </section>
  );
};

export default CustomBox;
