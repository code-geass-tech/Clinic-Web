import axios from 'axios'

const BASE_URL = 'https://www.asuna.rocks:7153'

export const login = async (email, password) => {
    return axios.post(
        `${BASE_URL}/Account/Login`,
        { email: email, password: password }
    )
}

export const register = async (email, password) => {
    return axios.post(
        `${BASE_URL}/Account/Register`,
        {email: email, password: password}
    );
}

export const getMe = async () => {
    return axios.get(
        `${BASE_URL}/Account/GetSelf`
    )
}

export const resetPassword = async () => {
    return axios.post(
        `${BASE_URL}/Account/ResetPassword`
    )
}