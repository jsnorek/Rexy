import axios from 'axios';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWUwMmIxZTNlZDZmNDY3Zjk1YjQxNTc1NmYzYWIxMyIsIm5iZiI6MTc0MDI2MjM3MC4wNiwic3ViIjoiNjdiYTRiZTJhOTZkYzE4OTc5YmViNDNmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.rWXMJ9Yvngc5WL6bfZ7OO9ODszRXKc51iHEEtHawYY4' // process.env.REACT_APP_API_KEY;

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Authorization': `Bearer ${API_KEY}`
  }
});

export default axiosInstance;

// curl --request GET \
// --url 'https://api.themoviedb.org/3/search/movie?query=Batman&callback=test' \
// --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWUwMmIxZTNlZDZmNDY3Zjk1YjQxNTc1NmYzYWIxMyIsIm5iZiI6MTc0MDI2MjM3MC4wNiwic3ViIjoiNjdiYTRiZTJhOTZkYzE4OTc5YmViNDNmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.rWXMJ9Yvngc5WL6bfZ7OO9ODszRXKc51iHEEtHawYY4' \
// --header 'accept: application/json'