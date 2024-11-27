"use client";
import { HeaderDataI } from "../../../localdata/type";
import useActiveHash from "@/hooks/useActiveHash";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  data: HeaderDataI[];
};

const Navs = ({ data }: Props) => {
  const { activeHash, updateHash } = useActiveHash("home");
  const path = usePathname();
  const router = useRouter();

  const handleNavigation = (id: string) => {
    if (path === "/consultaion") {
      router.push(`/#${id}`);
      updateHash(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
        updateHash(id);
      }
    }
  };
  return (
    <>
      {data?.map((el: HeaderDataI) => (
        <div
          className={`cursor-pointer ${
            activeHash === el?.id
              ? "text-blueSecondary text-bold underline"
              : "text-white"
          }`}
          key={el?.id}
          onClick={() => handleNavigation(el?.id)}>
          {el?.title}
        </div>
      ))}
    </>
  );
};

export default Navs;
