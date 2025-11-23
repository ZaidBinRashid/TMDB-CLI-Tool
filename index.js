#!/usr/bin/env node
// Above line is called Shebang Line which tells the OS which interpreter to use.



const url = 'https://api.themoviedb.org/3/authentication';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODk4NjAwYWM1ZDIwOTA4ZmIzZDk5NjU3YzUzYjE1NyIsIm5iZiI6MTc2MzkxNTU4Ny41OTgsInN1YiI6IjY5MjMzNzQzM2UyZGJhN2NiOTk1OGExMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HDN7rIs7RMGgpPpdm0D2TuTasLvyc5tWX8LN35gIdSo'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));