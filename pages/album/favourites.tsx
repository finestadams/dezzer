import MainLayout from "Layouts/MainLayout";
import React from "react";

const Favourites = () => {
  const favouritesAlbum = JSON.parse(
    localStorage.getItem("favourites-album") || "{}"
  );
  console.log(favouritesAlbum, "fav");
  const getFavouriteAlbum = favouritesAlbum?.map((data: any) => {
    return (
      <div className="rounded-lg shadow-lg bg-white max-w-sm" key={data.id}>
        <img className="rounded-t-lg" src={data?.album?.cover_big} alt="" />
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {data?.album?.title}
          </h5>
          <p className="text-gray-700 text-base mb-4">{data?.rank} ranked</p>
        </div>
      </div>
    );
  });
  return (
    <>
      <h1 className="text-2xl font-semibold pb-4 grid grid-cols-1 gap-3 w-3/4 m-auto md:grid-cols-3 md:gap-4 md:w-4/6 md:m-auto">
        Favourite Album
      </h1>
      <div className="grid grid-cols-1 gap-3 w-3/4 m-auto md:grid-cols-3 md:gap-4 md:w-4/6 md:m-auto">
        {getFavouriteAlbum}
      </div>
    </>
  );
};

Favourites.PageLayout = MainLayout;

export default Favourites;
