import { useAppDispatch } from "app/hooks";
import React, { useEffect, useState } from "react";
import ArtistDetailService from "services/getartistdetail";
import {
  artistImage,
  artistName,
  artistTrackId,
  noOfFans,
} from "features/artists/artistSlice";
import { useRouter } from "next/router";

const Artists = ({ getAllArtists }: any) => {
  const [mergeData, setMergData] = useState<any[]>([]);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const getArstistDetail = async () => {
    const data = getAllArtists.data.map(async (data: any) => {
      let artistResponse = await ArtistDetailService.getArtistDetail(data.id);
      if (artistResponse.status === 200) {
        const resp = artistResponse.data;
        return {
          ...data,
          resp,
        };
      } else {
        return data;
      }
    });
    const finalData = await Promise.all(data);
    setMergData(finalData);
  };
  useEffect(() => {
    getArstistDetail();
  }, []);

  const eachArtistAfterMap = mergeData.map((data: any) => {
    return (
      <div
        className="rounded-lg shadow-lg bg-white max-w-sm cursor-pointer"
        key={data.id}
        onClick={() => {
          dispatch(artistTrackId(data?.resp?.id));
          dispatch(artistImage(data?.picture_big));
          dispatch(noOfFans(data?.resp?.nb_fan));
          dispatch(artistName(data.name));
          router.replace(`/artists/${data?.resp?.id}`);
        }}
      >
        <img className="rounded-t-lg" src={data?.picture_big} alt="" />
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {data?.name}
          </h5>
          <p className="text-gray-700 text-base mb-4">
            {data?.resp?.nb_fan} fans
          </p>
        </div>
      </div>
    );
  });
  return <>{eachArtistAfterMap}</>;
};

export default Artists;
