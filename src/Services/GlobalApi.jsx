import axios from 'axios'

const movieBaseUrl = "https://api.themoviedb.org/3"

const api_key = '1bbcf6b8e0d2d4280cdb9c791d801d27'

//https://api.themoviedb.org/3/trending/all/day?language=en-US' 

const getTrendingVideos=axios.get(this.movieBaseUrl+"/trending/all/day?api_key"+api_key)