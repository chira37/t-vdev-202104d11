import axios from "axios";

const BASE_URL = "http://localhost:1225";

export const http = axios.create({
    baseURL: `${BASE_URL}/api`,
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});
