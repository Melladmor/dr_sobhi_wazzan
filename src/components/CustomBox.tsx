"use client";
import useActiveHash from "@/hooks/useActiveHash";
import React, { HTMLAttributes, useRef } from "react";

type Props<T = HTMLElement> = {
  children: React.ReactNode;
  withCustomBg?: boolean;
  htmlAttr?: HTMLAttributes<T>;
  className?: string;
  hash: string; // Add hash as a prop
};

const CustomBox: React.FC<Props> = ({
  children,
  withCustomBg,
  htmlAttr,
  className,
  hash,
}) => {
  const ref = useRef<HTMLElement>(null); // Create a ref for the CustomBox
  const { activeHash } = useActiveHash("home", ref); // Use the custom hook with the ref

  return (
    <section
      ref={ref} // Attach the ref to the section
      id={hash} // Set the id to match the hash
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
