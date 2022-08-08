import Router, { useRouter } from "next/router";
import React, { useState } from "react";

const AlbumList = ({ data }: any) => {
  const [favourites, setFavourites] = useState<any[]>([]);
  const router = useRouter();
  const saveToLocalStorage = (items: any) => {
    localStorage.setItem("favourites-album", JSON.stringify(items));
  };
  const addFavouriteAlbum = (album: any) => {
    const newFavouriteList = [...favourites, album];
    console.log(newFavouriteList);
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
    router.replace("/album/favourites");
  };

  return (
    <div className="rounded-lg shadow-lg bg-white max-w-sm">
      <img className="rounded-t-lg" src={data?.album?.cover_big} alt="" />
      <div className="p-6">
        <h5 className="text-gray-900 text-xl font-medium mb-2">
          {data?.album?.title}
        </h5>
        <p className="text-gray-700 text-base mb-4">{data?.rank} ranked</p>
        <button
          className="text-sm font-sans  border rounded-xl px-2 text-black border-black-500 hover:bg-slate-300 shadow"
          onClick={() => addFavouriteAlbum(data)}
        >
          Add to favorites
        </button>
      </div>
    </div>
  );
};

export default AlbumList;
