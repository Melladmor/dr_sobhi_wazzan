"use client";

import usePlayHook from "@/hooks/usePlayHook";
import Controls from "./Controls";
import useVolume from "@/hooks/useVolume";
import useNextBack from "@/hooks/useNextBack";
import { motion } from "framer-motion";
type Props = {
  videoLink: string;
  customClass?: string;
};

const VideoPlayer = ({ videoLink, customClass }: Props) => {
  const {
    currentTime,
    duration,
    handlePlayPause,
    handleSeek,
    isPlaying,
    toggleFullScreen,
    videoRef,
    showMainPlay,
  } = usePlayHook();

  const {
    handleVolumeChange,
    isMuted,
    showVolumeControl,
    toggleMute,
    toggleVolumeControl,
    volume,
  } = useVolume(1, videoRef);

  const { handleBack, handleNext } = useNextBack(videoRef);
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 1.5,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="relative video_h_w">
      <video
        ref={videoRef}
        className={`video_h_w  object-cover ${
          customClass ? customClass : "vedio_custom_class "
        }`}
        preload="none"
        controls={false}>
        <source src={videoLink} type="video/mp4" />
        <track src={videoLink} kind="subtitles" srcLang="en" label="English" />
      </video>

      <Controls
        play_pause={{
          isPlaying: isPlaying,
          onClick: handlePlayPause,
          showMainPlay,
        }}
        fullScreen={toggleFullScreen}
        track={{
          currentTime,
          duration,
          handleSeek,
        }}
        volume={{
          handleVolumeChange,
          isMuted,
          showVolumeControl,
          toggleMute,
          toggleVolumeControl,
          volume,
        }}
        next_back={{
          handleBack,
          handleNext,
        }}
      />
    </motion.div>
  );
};

export default VideoPlayer;
