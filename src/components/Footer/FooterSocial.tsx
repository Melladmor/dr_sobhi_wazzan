import Image from "next/image";
import React from "react";

type Props = {
  icon: string;
  link: string;
};

const FooterSocial = ({ link, icon }: Props) => {
  return (
    <div>
      <a href={link} target="_blank">
        <Image
          src={icon}
          width={100}
          height={100}
          alt={icon}
          className="size-[24px]"
          loading="lazy"
          objectFit="contain"
        />
      </a>
    </div>
  );
};

export default FooterSocial;
