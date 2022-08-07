import { useAppSelector } from "app/hooks";
import React, { useEffect, useState } from "react";
import AlbumList from "./AlbumList";
import PlayLists from "./PlayLists";

const ArtistDetail = ({ albumDetail }: any) => {
  console.log(albumDetail, "in");

  const artistImg = useAppSelector((state) => state.artist.currentArtistImage);
  const getArtistDetails = albumDetail?.data?.map((data: any) => {
    return (
      <>
        <PlayLists data={data} key={data.id}></PlayLists>
      </>
    );
  });
  const getAlbumDetails = albumDetail?.data?.map((data: any) => {
    return (
      <>
        <AlbumList data={data} key={data.id}></AlbumList>
      </>
    );
  });

  return (
    <>
      <div className="flex flex-col justify-center md:flex-row md:max-w-1/2">
        <img
          className="object-cover w-full h-96 rounded-t-lg md:h-72 md:w-1/2 md:rounded-none "
          src={artistImg}
          alt=""
        />
        <div className="flex flex-col justify-start p-4 leading-normal flex-1">
          <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-5">
            Top tracks
          </h5>
          {getArtistDetails}{" "}
        </div>
      </div>
      <div className="mt-4 ">
        <h2 className="grid grid-cols-1 gap-3 w-3/4 m-auto md:grid-cols-3 md:gap-4 md:w-4/6 md:m-auto text-2xl py-4">
          Albums
        </h2>
        <div className="grid grid-cols-1 gap-3 w-3/4 m-auto md:grid-cols-3 md:gap-4 md:w-4/6 md:m-auto">
          {getAlbumDetails}
        </div>
      </div>
    </>
  );
};

export default ArtistDetail;
