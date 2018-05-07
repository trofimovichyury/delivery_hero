export const makeRequest = (path, method = 'GET') => {
    const headers = new Headers();
    headers.append('token', global_config.token);
    const options = {
        method,
        headers
    };
    return fetch(`${global_config.endpoint}${path}`, options)
        .then(response => {
            if (!response.ok) {
                console.log(response.status);
            }
            return response.json();
        })
        .catch(error => {
            console.log(error);
        });
};

export const getListOfRestaurants = () => makeRequest('/restaurants');

export const getRestaurantInfo = id => makeRequest(`/restaurants/${id}`);
