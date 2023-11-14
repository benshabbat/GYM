export const execisesOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
    params: {limit: '10'},
    headers: {
      'X-RapidAPI-Key':process.env.RAPID_API_KEY ,
      'X-RapidAPI-Host': process.env.RAPID_API_HOST
    }
  };




export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};
