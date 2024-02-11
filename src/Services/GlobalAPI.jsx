import axios from "axios";

const BaseURL = "https://api.themoviedb.org/3";
const api_key = '2ec0d66f5bdf1dd12eefa0723f1479cf';
const getTrendingVideos = axios.get(BaseURL +"/trending/all/day?api_key="+api_key);
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';
 const getgenrawithid = (id)=>(
    axios.get( movieByGenreBaseURL+"&with_genres="+id)
 )
export default{
    getTrendingVideos,
    getgenrawithid
}