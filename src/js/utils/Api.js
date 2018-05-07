const config = {
    endpoint: 'https://u3sv7kca97.execute-api.us-east-1.amazonaws.com/prod'
};

export const makeRequest = (path, method = 'GET') => {
    const headers = new Headers();
    if (config.token) {
        headers.append('token', config.token);
    }
    const options = {
        method,
        headers
    };
    return fetch(`${config.endpoint}${path}`, options)
        .then(response => {
            if (!response.ok) {
                // error statuses handler
            }
            return response.json();
        })
        .catch(error => {
            throw error;
        });
};

export const getListOfRestaurants = () => makeRequest('/restaurants');

export const getRestaurantInfo = id => makeRequest(`/restaurants/${id}`);

export const getToken = () =>
    makeRequest('/auth')
        .then(data => config.token = data.token);
