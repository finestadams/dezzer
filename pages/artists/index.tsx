import { useAppSelector } from "app/hooks";
import Artist from "components/Artist";
import SearchArtist from "components/Artist";
import Artists from "components/Artists";
import MainLayout from "Layouts/MainLayout";
import { AllArtistsModel } from "models/artists";
import { GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import AllArtistService from "services/allartists";
import SearchArtistService from "services/searchartist";

export async function getServerSideProps() {
  const listOfArtistFromDeezer = await AllArtistService.getAllArtistFromChart();
  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key: any, value: any) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };
  const data = await listOfArtistFromDeezer.data;

  return {
    props: { data },
  };
}

const Index = (props: any) => {
  const [getArtist, setArtist] = useState<any[]>([]);
  const searchValue = useAppSelector((state) => state.artist.currentSearch);
  const getArtistBySearching = async (artistName: string) => {
    if (searchValue) {
      const searchedArtistFromDeezer =
        await SearchArtistService.getArtistBySearch(artistName);
      if (searchedArtistFromDeezer.status === 200) {
        console.log(searchedArtistFromDeezer.data, "data");
        setArtist(searchedArtistFromDeezer.data);
      }
    }
  };
  useEffect(() => {
    getArtistBySearching(searchValue);
  }, [searchValue]);

  return (
    <>
      <h1 className="text-2xl font-semibold pb-4 grid grid-cols-1 gap-3 w-3/4 m-auto md:grid-cols-3 md:gap-4 md:w-4/6 md:m-auto">
        Artists
      </h1>
      <div className="grid grid-cols-1 gap-3 w-3/4 m-auto md:grid-cols-3 md:gap-4 md:w-4/6 md:m-auto">
        {searchValue && <Artist getArtist={getArtist}></Artist>}

        {!searchValue && <Artists getAllArtists={props.data}></Artists>}
      </div>
    </>
  );
};

Index.PageLayout = MainLayout;

export default Index;
