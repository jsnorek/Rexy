import axiosInstance from "./axiosInstance";

export const tmdbURL = {
  trending: "/trending/all/day",
  discoverMovie: "/discover/movie",
  discoverTv: "/discover/tv",
  test: "/search/movie?query=Batman&callback=test"
}

export const getTrending = async () => {
  try {
    const response = await axiosInstance.get(tmdbURL.trending);
    return response.data;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
}