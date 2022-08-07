import { AxiosResponse } from 'axios';
import axios from 'interceptor/axiosinstance';

const getArtistDetail = (artistId: number) => {
  return axios<AxiosResponse>({
    method: 'GET',
    url: `artist/${artistId}`
  });
};
const ArtistDetailService = {
    getArtistDetail
};
export default ArtistDetailService;
