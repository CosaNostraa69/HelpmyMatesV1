import axios from 'axios';

const API_URL = 'http://localhost:3001/api/'; // Remplacez par l'URL de votre backend

const register = (username, email, password) => {
    return axios.post(API_URL + 'signup', {
        username,
        email,
        password
    });
};

const login = (email, password) => {
    return axios.post(API_URL + 'login', {
        email,
        password
    }).then((response) => {
        if (response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    });
};
const logout = () => {
    localStorage.removeItem('user');
}
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}


const authService = {
    register,
    login,
    logout,
    getCurrentUser

};

export default authService;
