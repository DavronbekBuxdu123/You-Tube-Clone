import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": "5541eb3669mshe8e251b889cbf60p1d9c41jsn083f1273db94",
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};
export const ApiService = {
  async fetching(url: string) {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response;
  },
};
