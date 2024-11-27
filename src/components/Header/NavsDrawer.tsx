"use client";
import { HeaderDataI } from "../../../localdata/type";
import useActiveHash from "@/hooks/useActiveHash";
import { usePathname, useRouter } from "next/navigation";
type Props = {
  data: HeaderDataI[];
};

const NavsDrawer = ({ data }: Props) => {
  const { activeHash, updateHash } = useActiveHash("home");

  const closeDrawer = () => {
    const drawerCheckbox = document.getElementById(
      "my-drawer"
    ) as HTMLInputElement;
    if (drawerCheckbox) {
      drawerCheckbox.checked = false; // Uncheck the checkbox to close the drawer
    }
  };

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
      <input id="my-drawer" type="checkbox" className="drawer-toggle hidden" />
      <ul className=" bg-blurGradient_normal  min-h-full w-80 p-4">
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
              <li
                className={`${
                  activeHash === el?.id
                    ? "text-blueSecondary bg-white rounded-md"
                    : "text-white"
                } p-2`}>
                <div
                  className="cursor-pointer"
                  key={el?.id}
                  onClick={() => {
                    handleNavigation(el?.id);
                    closeDrawer();
                  }}>
                  {el?.title}
                </div>
              </li>
            </label>
          );
        })}
      </ul>
    </>
  );
};

export default NavsDrawer;
