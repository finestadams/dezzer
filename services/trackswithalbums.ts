import { AxiosResponse } from 'axios';
import axios from 'interceptor/axiosinstance';

const getTracksWithAlbum = (trackId: string) => {
  return axios<AxiosResponse>({
    method: 'GET',
    url: `artist/${trackId}/top?limit=5`
  });
};
const AlbumWithTrackService = {
    getTracksWithAlbum
};
export default AlbumWithTrackService;
