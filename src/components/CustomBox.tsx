import React, { HTMLAttributes } from "react";

type Props<T = HTMLElement> = {
  children: React.ReactNode;
  withCustomBg?: boolean;
  htmlAttr?: HTMLAttributes<T>;
};
const CustomBox: React.FC<Props> = ({ children, withCustomBg, htmlAttr }) => {
  return (
    <section
      className={`custom_box_padding ${
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
