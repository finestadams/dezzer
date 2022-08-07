import React, { useEffect, useState } from "react";

const PlayLists = ({ data }: any) => {
  const [isPlaying, setPlaying] = useState(false);
  const toggle = () => setPlaying(!isPlaying);
  const audio = new Audio(data?.preview);
  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying, toggle]);
  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [isPlaying, toggle]);
  return (
    <div
      className="flex space-x-10 border-b py-2 justify-between"
      onClick={toggle}
    >
      <div className="flex item-center space-x-3 cursor-pointer">
        {isPlaying ? (
          <img className="w-5" src="/svg/pause.svg" />
        ) : (
          <img className="w-5" src="/svg/play.svg" />
        )}
        <p>{data?.title}</p>
      </div>
      <p>
        {String(data?.duration).slice(0, 1) +
          ":" +
          String(data?.duration).slice(1)}
      </p>
    </div>
  );
};

export default PlayLists;
