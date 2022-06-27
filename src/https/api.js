import axios from "axios";

export const api = axios.create({
    baseURL:'https://motion-test-platform.herokuapp.com/'
});