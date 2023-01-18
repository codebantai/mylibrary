const ApiUrl = process.env.NEXT_PUBLIC_API_URL;

const UrlParamsReplace = (url, params = {}) => {
    let urlWithPrefix = `${ApiUrl}/api${url}`;
    if (params) {
        Object.keys(params).forEach((key) => {
            urlWithPrefix = urlWithPrefix.replace(`:${key}`, params[key]);
        });
    }
    return urlWithPrefix;
};

export const GET_SERVER_TIME = UrlParamsReplace('/server-time/today');
export const CREATE_ROLE = UrlParamsReplace('/create')
export const CREATE_BOOK = UrlParamsReplace('/book')
export const GET_CATEGORIES = UrlParamsReplace('/categories')
export const GET_BOOKS =({search,take,skip,categoryId})=> UrlParamsReplace(`/books?skip=${skip}&take=${take}&search=${search}&categoryId=${categoryId}`,{search,take,skip,categoryId})