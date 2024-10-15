import React from "react";
import { MoadlI } from "../componetns";
import VideoModal from "../Modal/VideoModal";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

type Props = {
  videoLink: string;
  modal_setting: MoadlI;
};

const HeroVideo = ({ videoLink, modal_setting }: Props) => {
  return (
    <div className="flex items-center gap-[13px]">
      <button onClick={modal_setting?.handleShowModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="57"
          height="58"
          className="lg:w-[58px] lg:h-[57px] md:w-[50px] md:h-[50px] sm:w-[40px] xs:w-[40px] sm:h-[40px] xs:h-[40px]"
          viewBox="0 0 57 58"
          fill="none">
          <path
            opacity="0.15"
            d="M0 29C0 13.2599 12.7599 0.5 28.5 0.5C44.2401 0.5 57 13.2599 57 29C57 44.7401 44.2401 57.5 28.5 57.5C12.7599 57.5 0 44.7401 0 29Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.5935 27.9213C35.4285 28.404 35.4258 29.5938 34.5935 30.0765L25.2629 35.5035C24.4226 35.994 23.3438 35.4044 23.3438 34.4259V23.5693C23.3438 22.4786 24.5048 22.0507 25.2629 22.4917L34.5935 27.9213Z"
            fill="white"
          />
        </svg>
      </button>
      <p className="text-white lg:text-[1.125rem] md:text-[1.125rem] sm:text-[0.75rem] xs:text-[0.75rem] font-[600] lg:w-[152px]">
        Watch our introduction video
      </p>
      <VideoModal
        modal_setting={{
          show: modal_setting?.show,
          handleShowModal: modal_setting?.handleShowModal,
        }}>
        <VideoPlayer
          customClass="border-gray_1 border-[2px] rounded-md shadow-lg shadow-gray_2 "
          videoLink={videoLink}
        />
      </VideoModal>
    </div>
  );
};

export default HeroVideo;
