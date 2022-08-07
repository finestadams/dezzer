import React from "react";

const AlbumList = ({ data }: any) => {
  return (
    <div className="rounded-lg shadow-lg bg-white max-w-sm">
      <img className="rounded-t-lg" src={data?.album?.cover_big} alt="" />
      <div className="p-6">
        <h5 className="text-gray-900 text-xl font-medium mb-2">
          {data?.album?.title}
        </h5>
        <p className="text-gray-700 text-base mb-4">{data?.rank} ranked</p>
      </div>
    </div>
  );
};

export default AlbumList;
