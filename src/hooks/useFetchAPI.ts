import axios from "axios";
import { EnvironmentVariables } from "../utils/EnvironmentVariables";

export const useFetchAPI = () => {
    const url: string = EnvironmentVariables.URLs.APIUrl;

    const post = async (params: any) => {
        // obviosuly this will need editing so one can parse their parameters for the request
        return axios.post(url);
    }

    const get = async () => {
        return axios.get(url);

    }

    return { get, post };

}