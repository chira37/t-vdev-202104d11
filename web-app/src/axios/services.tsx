import { http } from "./http";

const getMovies = () => {
    return http.get("/movies");
};

export default {
    getMovies,
};
