import axios from 'axios';

// @ts-ignore
const BASE_URL = import.meta.env.VITE_API_URL;

export interface getApi {
  path: string
}

const getApi = async (resource : getApi) : Promise<any> =>  {
  const request = 'get';
  const url : string = `${BASE_URL}${resource.path}`;

  return axios[request](url);
};

export default getApi;
