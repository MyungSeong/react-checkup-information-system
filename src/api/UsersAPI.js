import { APIManager, clearSession } from '@lib';
import { API_URL } from '@constants/Config';

const $http = new APIManager();

export const signUpUser = (data) => {
    const url = `${API_URL}/auth/signup`;

    return $http.post(url, data);
};

export const signInUser = (data) => {
    const url = `${API_URL}/auth/signin`;

    return $http.post(url, data);
};

export const signOutUser = (data) => {
    const url = `${API_URL}/auth/signout`;

    clearSession();

    return $http.delete(url, data);
};
