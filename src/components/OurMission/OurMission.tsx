import React from "react";
import OurMissionTitle from "./OurMissionTitle";
import { ourVisionData } from "../../../localdata/ourVisionData";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const OurMission = () => {
  return (
    <div>
      <OurMissionTitle
        data={{
          title: ourVisionData?.missionTile,
          description: ourVisionData?.missionDescription,
        }}
      />
      <OurMissionTitle
        data={{
          title: ourVisionData?.visionTitle,
          description: ourVisionData?.visionDescription,
        }}
        customClass="flex justify-between items-center lg:flex-row-reverse md:flex-col sm:flex-col xs:flex-col"
        titleClass="lg:text-end md:text-end sm:text-end xs:text-end"
      />

      <div>
        <VideoPlayer videoLink={ourVisionData?.videoLink} />
      </div>
    </div>
  );
};

export default OurMission;
