"use client";
import { OurVisionI } from "../../../localdata/type";
import OurMissionTitle from "./OurMissionTitle";
type Props = Omit<OurVisionI, "videoLink">;

const TitleContainer = ({
  missionDescription,
  missionTile,
  visionDescription,
  visionTitle,
}: Props) => {
  return (
    <div>
      <OurMissionTitle
        data={{
          title: missionTile,
          description: missionDescription,
        }}
        titleMotion={{
          initial: {
            opacity: 0,
            scale: 0.5,
          },
          whileInView: {
            opacity: 1,
            scale: 1,
          },
          transition: {
            duration: 1,
          },
        }}
        subTitleMotion={{
          initial: {
            opacity: 0,
            scale: 0.5,
            rotate: 5,
          },
          whileInView: {
            opacity: 1,
            scale: 1,
            rotate: 0,
          },
          transition: {
            duration: 1.5,
          },
        }}
      />
      <OurMissionTitle
        data={{
          title: visionTitle,
          description: visionDescription,
        }}
        customClass="flex justify-between items-center lg:flex-row-reverse md:flex-col sm:flex-col xs:flex-col"
        titleClass="lg:text-end md:text-end sm:text-end xs:text-end"
        titleMotion={{
          initial: {
            opacity: 0,
            scale: 0.5,
          },
          whileInView: {
            opacity: 1,
            scale: 1,
          },
          transition: {
            duration: 1,
          },
        }}
        subTitleMotion={{
          initial: {
            opacity: 0,
            scale: 0.5,
            rotate: 5,
          },
          whileInView: {
            opacity: 1,
            scale: 1,
            rotate: 0,
          },
          transition: {
            duration: 1.5,
          },
        }}
      />
    </div>
  );
};

export default TitleContainer;
