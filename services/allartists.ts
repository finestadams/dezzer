import { AxiosResponse } from 'axios';
import axios from 'interceptor/axiosinstance';

const getAllArtistFromChart = () => {
  return axios<AxiosResponse>({
    method: 'GET',
    url: `chart/0/artists`
  });
};
const AllArtistService = {
    getAllArtistFromChart
};
export default AllArtistService;
