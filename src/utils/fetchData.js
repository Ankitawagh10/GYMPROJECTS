export const exerciseOptions = {
  method: 'GET',
 
  headers: {
    'X-RapidAPI-Key': '00574c1042msh4d4859d312929aep11a8bbjsn60fdb7507b20',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};

//url: 'https://exercisedb.p.rapidapi.com/exercises/exercise/%7Bid%7D',

export const fetchData = async (url, options)=>{
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};