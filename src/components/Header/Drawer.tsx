import React from "react";
import { headerData } from "../../../localdata/headerData";
import NavsDrawer from "./NavsDrawer";

const Drawer = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content mr-2">
        <label htmlFor="my-drawer" className="drawer-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block  size-[1.5rem] stroke-current text-white mb-1">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"></label>
        <NavsDrawer data={headerData} />
      </div>
    </div>
  );
};

export default Drawer;
