import axios from 'axios';

export const postWithOutAuth = (url, entity) => new Promise((resolve, _reject) => {
    axios
        .post(url, entity)
        .then((response) => {
            if (response && response.data) {
                resolve({ status: true, data: response.data });
            }
        })
        .catch((ex) => {
            resolve({ status: false, message: ex.message });
        });
});

export const postWithAuth = (url, entity, token = '') => new Promise((resolve, _reject) => {
    const headers = {
        'content-type': 'application/json',
        'x-access-token': token
    };
    axios
        .post(url, entity, { headers })
        .then((response) => {
            if (response && response.data) {
                resolve({ status: true, data: response.data });
            }
        })
        .catch((ex) => {
            resolve({ status: false, message: ex.message });
        });
});

export const getWithOutAuth = (url) => new Promise((resolve, _reject) => {
    axios
        .get(url)
        .then((response) => {
            if (response && response.data) {
                resolve({ status: true, data: response.data });
            }
        })
        .catch((ex) => {
            resolve({ status: false, error: ex.message });
        });
});

export const getWithAuth = (url, token = '', data) => {
    const headers = {
        'content-type': 'application/json',
        'x-access-token': token
    };
    return new Promise((resolve, _reject) => {
        axios
            .get(url, { headers, data })
            .then((response) => {
                if (response && response.data) {
                    resolve({ status: true, data: response.data });
                }
            })
            .catch((ex) => {
                resolve({ status: false, error: ex.message });
            });
    });
};

export const deleteWithAuth = (url, entity, token = '') => new Promise((resolve, _reject) => {
    const headers = {
        'content-type': 'application/json',
        'x-access-token': token
    };
    axios
        .delete(url, {
            data: entity,
            headers
        })
        .then((response) => {
            if (response && response.data) {
                resolve({ status: true, data: response.data });
            }
        })
        .catch((ex) => {
            resolve({ status: false, message: ex.message });
        });
});

export const putWithAuth = (url, data, token = '') => {
    const headers = {
        'content-type': 'application/json',
        'x-access-token': token
    };
    return new Promise((resolve, _reject) => {
        axios
            .put(url, data, { headers })
            .then((response) => {
                if (response && response.data) {
                    resolve({ status: true, data: response.data });
                }
            })
            .catch((ex) => {
                resolve({ status: false, message: ex.message });
            });
    });
};
