"use client";
import React, { useState } from "react";
import { HeaderDataI } from "../../../localdata/type";
import Link from "next/link";

type Props = {
  data: HeaderDataI[];
};

const Navs = ({ data }: Props) => {
  const [activeHash, setActiveHash] = useState<string>("home");

  return (
    <>
      {data?.map((el: HeaderDataI) => {
        return (
          <Link
            className={`${
              activeHash === el?.id
                ? "text-blueSecondary text-bold underline"
                : "text-white"
            }`}
            key={el?.id}
            href={`#${el?.id}`}
            onClick={() => setActiveHash(el?.id)}>
            {el?.title}
          </Link>
        );
      })}
    </>
  );
};

export default Navs;
