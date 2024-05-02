import axios from 'axios';
import { ApiRoutes } from '../constants/apiRoutes.ts';

// @ts-ignore
const BASE_URL = import.meta.env.VITE_API_URL;

export interface getApi {
  path: string
}

export enum RequestType {
  GET = 'get'
}

const getToken = async () : Promise<string> =>  {
  return await getApi({ path: ApiRoutes.GET_TOKEN }).then((response) => {
    const token : string = `Bearer ${response.data}`;
    localStorage.setItem('token', token);
    return token;
  });
}

export const getPrivateApi = async (resource : getApi) : Promise<any> =>  {
  const url : string = `${BASE_URL}${resource.path}`;

  const token : string | null = localStorage.getItem('token') ? localStorage.getItem('token') : await getToken();

  const config : {} = {
    headers: {
      Authorization: token
    }
  }

  return axios.request({
    method: RequestType.GET,
    url,
    ...config
  });
}


export const getApi = async (resource : getApi) : Promise<any> =>  {
  const url : string = `${BASE_URL}${resource.path}`;

  return axios[RequestType.GET](url);
};


