import { AxiosResponse } from 'axios';
import axios from 'interceptor/axiosinstance';

const getArtistBySearch = (artistName: string) => {
  return axios<AxiosResponse>({
    method: 'GET',
    url: `/search/artist?q=${artistName}`
  });
};
const SearchArtistService = {
    getArtistBySearch
};
export default SearchArtistService;

