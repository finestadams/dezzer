import { useAppSelector } from "app/hooks";
import ArtistDetail from "components/ArtistDetail";
import DetailLayout from "Layouts/DetailLayout";
import React, { useEffect, useState } from "react";
import AlbumWithTrackService from "services/trackswithalbums";

export async function getServerSideProps(context: any) {
  return {
    props: {
      params: context.params,
    },
  };
}

const TopTracks = ({ params }: any) => {
  const [albumDetails, setAlbumDetails] = useState<any[]>([]);
  const { trackId } = params;
  console.log(trackId);
  const getTracksWithAlbum = async (trackId: string) => {
    let tracksFromDeezer = await AlbumWithTrackService.getTracksWithAlbum(
      trackId
    );
    if (tracksFromDeezer.status === 200) {
      console.log(tracksFromDeezer.data, "tracks");
      setAlbumDetails(tracksFromDeezer.data);
    }
  };
  useEffect(() => {
    getTracksWithAlbum(trackId);
  }, [trackId]);
  console.log(albumDetails, "alb");

  return (
    <>
      <ArtistDetail albumDetail={albumDetails}></ArtistDetail>
    </>
  );
};

TopTracks.PageLayout = DetailLayout;

export default TopTracks;
