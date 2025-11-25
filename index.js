#!/usr/bin/env node
// ^ The shebang makes this file executable as a CLI command on all OS environments.

import dotenv from "dotenv";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

// Load environment variables from .env file
dotenv.config();

// Map user-friendly CLI options to TMDB API endpoints
const TYPE_MAP = {
  playing: "now_playing",
  popular: "popular",
  top: "top_rated",
  upcoming: "upcoming"
};

// Configure CLI argument parsing using yargs
const argv = yargs(hideBin(process.argv))
  .option("type", {
    alias: "t",
    type: "string",
    describe: "Choose: playing, popular, top, upcoming",
    demandOption: true, // Requires the user to pass --type
  })
  .help()
  .argv;

// Main function to fetch data from TMDB API
const TMDB = async (typeKey) => {
  const endpoint = TYPE_MAP[typeKey];

  // Validate user-provided type
  if (!endpoint) {
    console.error(`❌ Invalid type "${typeKey}". Use: playing, popular, top, upcoming`);
    process.exit(1);
  }

  try {
    // Construct the TMDB API URL
    const url = `https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=1`;

    // Make the fetch request
    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TOKEN}`, // Bearer token from .env
      },
    });

    // Parse API response as JSON
    const data = await response.json();

    // Output formatted JSON to the terminal
    console.log(JSON.stringify(data, null, 2));

  } catch (error) {
    console.error("❌ Error fetching data:", error);
  }
};

// Execute with user-provided CLI argument
TMDB(argv.type);
