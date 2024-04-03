
"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import play from "../../assets/Icons/audiobtn.svg";
import pause from "../../assets/Icons/pause.svg";

function AudioPlayer({ duay_audio }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0); 
  const audioRef = useRef();

  // Effect to update currentTime when audio is playing
  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(audioRef.current.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    if (isPlaying) {
      audioRef?.current?.addEventListener("timeupdate", updateTime);
      audioRef?.current?.addEventListener("ended", handleEnded);
    } else {
      audioRef?.current?.removeEventListener("timeupdate", updateTime);
      audioRef?.current?.removeEventListener("ended", handleEnded);
    }

    return () => {
      audioRef?.current?.removeEventListener("timeupdate", updateTime);
      audioRef?.current?.removeEventListener("ended", handleEnded);
    };
  }, [isPlaying]);

  // Function to handle toggling play/pause
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Function to handle seeking audio
  const handleSeek = (e) => {
    const seekTime = e.target.value;
    setCurrentTime(seekTime);
    audioRef.current.currentTime = seekTime;
    if (seekTime) {
      return setIsPlaying(true);
    }
    return setIsPlaying(false);
  };

  // Function to format time into minutes and seconds
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <audio ref={audioRef} src={duay_audio} />
      {duay_audio && (
        <div className="flex items-center gap-3">
          <Image
            onClick={togglePlay}
            width={50}
            height={50}
            alt="audio"
            src={isPlaying ? pause : play}
          />
          {isPlaying && (
            <div className="flex gap-3 items-center">
              
              <input
                type="range"
                className="custom-range"
                min="0"
                max={audioRef.current && audioRef.current.duration}
                step="0.01"
                value={currentTime}
                onChange={handleSeek}
              />
              <h1 className="text-end">{formatTime(currentTime)}</h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AudioPlayer;
