import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key:"6c757f2448604ec78ab6b036074a884b",
    }
})