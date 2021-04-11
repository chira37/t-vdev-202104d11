import axios from "axios";

const BASE_URL = "http://localhost:1023";

export const http = axios.create({
    baseURL: `${BASE_URL}/api`,
    headers: {
        "Content-type": "application/json",
    },
});
