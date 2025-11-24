#!/usr/bin/env node
// Above line is called Shebang Line which tells the OS which interpreter to use.

import dotenv from "dotenv"
import yargs from "yargs";
const argv = yargs(process.argv.slice(2)).argv;

dotenv.config();

const TMBD = async (type) => {

  const url = `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=1`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TOKEN}`
    }
  };
  
  fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));
}

TMBD(argv.type);