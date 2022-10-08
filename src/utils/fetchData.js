export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    // "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Key": "7844b90269mshab3433668bfffc5p1ddf90jsn1dd413173334",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

export const youtubeOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "7844b90269mshab3433668bfffc5p1ddf90jsn1dd413173334",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
