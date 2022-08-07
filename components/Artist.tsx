import { useAppDispatch, useAppSelector } from "app/hooks";
import { artistImage, artistTrackId } from "features/artists/artistSlice";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SearchArtistService from "services/searchartist";

const Artist = ({ getArtist }: any) => {
  const searchValue = useAppSelector((state) => state.artist.currentSearch);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const eachArtistAfterMap = getArtist?.data?.map((data: any) => {
    return (
      <div
        className="rounded-lg shadow-lg bg-white max-w-sm cursor-pointer"
        key={data.id}
        onClick={() => {
          dispatch(artistTrackId(data?.id));
          dispatch(artistImage(data?.picture_big));
          router.replace(`/artists/${data?.id}`);
        }}
      >
        <a href="#!">
          <img className="rounded-t-lg" src={data?.picture_big} alt="" />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {data.name}
          </h5>
          <p className="text-gray-700 text-base mb-4">{data?.nb_fan} fans</p>
        </div>
      </div>
    );
  });
  return <>{eachArtistAfterMap}</>;
};

export default Artist;
