type Props = {
  title: string;
};

const FooterSectionTitle = ({ title }: Props) => {
  return (
    <div>
      <h6 className="capitalize lg:text-[23px] md:text-[21px] sm:text-[19px] xs:text-[17px] text-white">
        {title}
      </h6>
      <div className="w-[28px] h-[3.7px] bg-white rounded-[1.8px]lg:mt-[20px] md:mt-[15px] sm:mt-[10px] xs:mt-[5px]"></div>
    </div>
  );
};

export default FooterSectionTitle;
