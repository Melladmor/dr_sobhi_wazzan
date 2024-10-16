import Image from "next/image";
import React from "react";

type Props = {
  image: string;
};

const ClientsCard = ({ image }: Props) => {
  return (
    <li>
      <Image
        src={image}
        alt={image}
        width={100}
        height={100}
        objectFit="contatin"
        className="lg:size-[100px] md:size-[90px] sm:size-[60px] xs:size-[60px] lg:rounded-[20px] md:rounded-[18px] sm:rounded-[16px] xs:rounded-[16px]"
      />
    </li>
  );
};

export default ClientsCard;
