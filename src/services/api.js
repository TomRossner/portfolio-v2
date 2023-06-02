import axios from "axios";

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'https://tomrossner.dev:5005' : 'http://localhost:5005/';

export const sendMail = async (mail) => {
    return await axios.post('/send-email', mail);
}