// https://api.themoviedb.org/3/trending/all/day?api_key=01649622450648f7ef39b2555f2960ba
import { useEffect, useState } from "react"
import { getTrending } from "../../services/tmdbURL";
import { TrendingContent } from "../../types/tmdb.type";
        

function Landing() {

  const [trending, setTrending] = useState<Array<TrendingContent>>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const trendingData = await getTrending();
        setTrending(trendingData.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [])
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
  // https://image.tmdb.org/t/p/


  // https://image.tmdb.org/t/p/w500/path/to/poster.jpg



  console.log(trending, "trending")
   return (
   <div>      
   {trending.length && <img src={`${IMAGE_BASE_URL}${trending[0].poster_path}`} alt={trending[0].name} />}
   </div>)
}

export default Landing;