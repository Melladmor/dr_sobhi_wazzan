"use client";
import { HeaderDataI } from "../../../localdata/type";
import Link from "next/link";
import useActiveHash from "@/hooks/useActiveHash";
import { motion } from "framer-motion";
type Props = {
  data: HeaderDataI[];
};

const NavsDrawer = ({ data }: Props) => {
  const variantsUl = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  const variantsLi = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  const { activeHash, updateHash } = useActiveHash("home");

  const closeDrawer = () => {
    const drawerCheckbox = document.getElementById(
      "my-drawer"
    ) as HTMLInputElement;
    if (drawerCheckbox) {
      drawerCheckbox.checked = false; // Uncheck the checkbox to close the drawer
    }
  };
  return (
    <>
      <input id="my-drawer" type="checkbox" className="drawer-toggle hidden" />
      <motion.ul
        variants={variantsUl}
        className=" bg-blurGradient_normal  min-h-full w-80 p-4">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="mb-3 text-white flex justify-end cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6">
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
              clipRule="evenodd"
            />
          </svg>
        </label>

        {data?.map((el: HeaderDataI) => {
          return (
            <label key={el?.id}>
              <motion.li
                variants={variantsLi}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`${
                  activeHash === el?.id
                    ? "text-blueSecondary bg-white rounded-md"
                    : "text-white"
                } p-2`}>
                <Link
                  key={el?.id}
                  href={`#${el?.id}`}
                  onClick={() => {
                    updateHash(el?.id);
                    closeDrawer();
                  }}>
                  {el?.title}
                </Link>
              </motion.li>
            </label>
          );
        })}
      </motion.ul>
    </>
  );
};

export default NavsDrawer;
