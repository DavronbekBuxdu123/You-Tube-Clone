import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": "c792f3de1bmsh045f133ee785302p18bb18jsnb58dd42f194e",
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};
export const ApiService = {
  async fetching(url: string) {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response;
  },
};
