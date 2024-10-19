import React from "react";
import { headerData } from "../../../localdata/headerData";
import Button from "../Button";
import Navs from "./Navs";
import Drawer from "./Drawer";
import Logo from "../../../public/svg/Logo";

function Header() {
  return (
    <div className="navbar custom_padding sticky top-0 z-10 bg-blurGradient_normal">
      <div className="navbar-start">
        <div className="lg:hidden">
          <Drawer />
        </div>
        <Logo />
      </div>
      <div className="navbar-center hidden lg:flex gap-[32px]">
        <Navs data={headerData} />
      </div>
      <div className="navbar-end">
        <Button
          color="bluePrimary lg:h-[2.65rem]  md:h-[2rem] sm:h-[1.65rem] xs:h-[1.65rem] w-auto"
          withArrow>
          Join To Platform Now
        </Button>
      </div>
    </div>
  );
}

export default Header;
