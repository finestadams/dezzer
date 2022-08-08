import { useAppDispatch } from "app/hooks";
import { searchArtist } from "features/artists/artistSlice";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [search, setSearch] = useState("");
  const [localStorageExists, setLocalStorageExists] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!localStorage.getItem("favourites-album")) {
      setLocalStorageExists(true);
    }
  }, [localStorageExists]);
  console.log(typeof localStorage.getItem("favourites-album"), "to");
  useEffect(() => {
    if (!search) {
      dispatch(searchArtist(search));
    }
  }, []);
  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-5 rounded dark:bg-gray-900 shadow">
        <div className="container flex space-x-9  items-center mx-auto">
          <div>
            <Link href="/artists">
              <a className="flex items-center">
                <img
                  src="/svg/logo.svg"
                  className="mr-3 h-6 sm:h-9"
                  alt="Deezer Logo"
                />
              </a>
            </Link>
          </div>

          <div
            className=" w-full md:block md:w-1/2 relative"
            id="navbar-default"
          >
            <form>
              <input
                type="search"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
                id="exampleSearch"
                placeholder="Search for artists"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setTimeout(() => {
                    dispatch(searchArtist(search));
                  }, 5000);
                }}
              />
            </form>
          </div>
          <div>
            <Link href={!localStorageExists ? "/album/favourites" : "#"}>
              <a className="flex items-center">Favourites</a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
