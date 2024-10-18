"use client";
import { HeaderDataI } from "../../../localdata/type";
import Link from "next/link";
import useActiveHash from "@/hooks/useActiveHash";

type Props = {
  data: HeaderDataI[];
};

const Navs = ({ data }: Props) => {
  const { activeHash, updateHash } = useActiveHash("home");

  return (
    <>
      {data?.map((el: HeaderDataI) => (
        <Link
          className={`${
            activeHash === el?.id
              ? "text-blueSecondary text-bold underline"
              : "text-white"
          }`}
          key={el?.id}
          href={`#${el?.id}`}
          onClick={() => updateHash(el?.id)}>
          {el?.title}
        </Link>
      ))}
    </>
  );
};

export default Navs;
