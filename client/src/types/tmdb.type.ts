export interface TrendingContent { 
  backdrop_path: string;
  id: number;
  name: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: Array<number>;
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: Array<string>;
}

export interface GetTrendingResponse {
  page: number;
  results: Array<TrendingContent>;
  total_pages: number;
  total_results: number;
}