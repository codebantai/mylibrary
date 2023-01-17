import * as HttpService from './http.service';
import { CREATE_ROLE  } from './url.service';


export const createRole = ( data) => HttpService.postWithOutAuth(CREATE_ROLE, data);

export const createUser = ( data) => HttpService.postWithOutAuth(CREATE_ROLE, data);
