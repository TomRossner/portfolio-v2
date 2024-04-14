import axios from "axios";

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PRODUCTION_URL : 'http://localhost:5005/';

export const sendMail = async (mail) => {
    return await axios.post('/send-email', mail);
}