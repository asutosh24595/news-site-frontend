import axios from "axios";


const API_KEY = "your-api-key-here";
const BASE_URL = "https://newsapi.org/v2";

export const getMainNews = async () => {
  const mainURL =
  `${BASE_URL}/top-headlines?country=in&apiKey=${API_KEY}`;

  try {
    return await axios.get(mainURL);
  } catch (error) {
    console.error(error);
  }
};

const otherURL = "https://newsapi.org/v2/everything";

export const getNewsByQuery = async (q) => {
  try {
    return await axios.get(
      `${otherURL}?q=${q}&apiKey=${API_KEY}`
    );
  } catch (error) {
    console.error(error);
  }
};
