import * as HttpService from './http.service';
import { CREATE_BOOK,   } from './url.service';


export const createBook = ( data) => HttpService.postWithOutAuth(CREATE_BOOK, data);

