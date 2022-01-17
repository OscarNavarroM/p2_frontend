import httpClient from '../http-common';

const getAll = () => {
    return httpClient.get('/producto');
}

const create = data => {
    return httpClient.post('/producto/create',data);
}

const count = () => {
    return httpClient.get('/producto/count');
}

const remove = id => {
    let url = '/producto/delete/';
    let urlId = id.toString();
    let urlFinal = url.concat(urlId)

    return httpClient.delete(urlFinal);
}
export default {getAll, create, remove, count};