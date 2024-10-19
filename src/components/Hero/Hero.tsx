import { heroSectionData } from "../../../localdata/heroSectionData";
import { ourVisionData } from "../../../localdata/ourVisionData";
import HeroImage from "./HeroImage";
import HeroDescription from "./HeroDescription";
const Hero = () => {
  return (
    <div className="lg:flex lg:items-start lg:flex-row-reverse ">
      <HeroImage imageLink={heroSectionData?.image} />
      <HeroDescription
        title={heroSectionData?.title}
        subTitle={heroSectionData?.subTitle}
        videoLink={ourVisionData?.videoLink}
        image={heroSectionData?.image}
      />
    </div>
  );
};

export default Hero;
