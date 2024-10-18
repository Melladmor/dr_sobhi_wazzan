export interface UsePlayHookReturn {
  videoRef: MutableRefObject<HTMLVideoElement | null>;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  handlePlayPause: () => void;
  handleSeek: (newTime: number) => void;
  toggleFullScreen: () => void;
  showMainPlay: boolean;
}

export interface UseTrackHookReturn {
  currentTime: number;
  duration: number;
  handleSeek: (newTime: number) => void;
}

export interface UseVolumeReturn {
  volume: number;
  isMuted: boolean;
  showVolumeControl: boolean;
  toggleVolumeControl: () => void;
  handleVolumeChange: (newVolume: number) => void;
  toggleMute: () => void;
}

export type useNextBackReturn = {
  handleBack: () => void;
  handleNext: () => void;
};

export interface UseActiveHashReturn {
  activeHash: string;
  updateHash: (hash: string) => void;
}
