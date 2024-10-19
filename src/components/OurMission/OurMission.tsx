import React from "react";
import { ourVisionData } from "../../../localdata/ourVisionData";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import TitleContainer from "./TitleContainer";

const OurMission = () => {
  return (
    <div>
      <TitleContainer {...ourVisionData} />
      <VideoPlayer videoLink={ourVisionData?.videoLink} />
    </div>
  );
};

export default OurMission;
