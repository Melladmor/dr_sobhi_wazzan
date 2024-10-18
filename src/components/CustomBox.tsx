"use client";
import useActiveHash from "@/hooks/useActiveHash";
import React, { HTMLAttributes } from "react";

type Props<T = HTMLElement> = {
  children: React.ReactNode;
  withCustomBg?: boolean;
  htmlAttr?: HTMLAttributes<T>;
  className?: string;
  hash: string;
};

const CustomBox: React.FC<Props> = ({
  children,
  withCustomBg,
  htmlAttr,
  className,
  hash,
}) => {
  const { activeHash } = useActiveHash("home");

  return (
    <section
      id={hash}
      aria-label={activeHash}
      className={`custom_box_padding ${className} ${
        withCustomBg ? "custom_glass_effect" : ""
      }`}
      {...htmlAttr}>
      <div className={`${withCustomBg ? "custom_glass_content" : ""}`}>
        {children}
      </div>
    </section>
  );
};

export default CustomBox;
