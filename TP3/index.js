const axios = require('axios');

// Exo 1
const isStringTooLong = (string) => {
  return new Promise((resolve, reject) => {
    string.length > 20 
    ? reject('String too long')
    : resolve(true);
  });
}

// Exo 2
const intDiff = (a, b) => {
  return new Promise((resolve, reject) => {
    a > b 
    ? resolve(a - b)
    : reject('a must be greater than b');
  });
}

// Exo 3
const isMajor = (date) => {
  return new Promise((resolve, reject) => {
    date = date.split('/');
    const birthDate = new Date(date[2], date[1], date[0]);
    const today = new Date();

    Math.floor((today-birthDate)/31557600000) < 18
    ? reject('You\'re minor')
    : resolve(true);
  });
}

// Exo 4
isStringTooLong('Hello World !')
.then((response) => console.log(response))
.catch((error) => console.log(error));

intDiff(4, 5)
.then((response) => console.log(response))
.catch((error) => console.log(error));

isMajor('21/04/1998')
.then((response) => console.log(response))
.catch((error) => console.log(error));

// Exo 5
const execute = async () => {
  try {
    const isTooLong = await isStringTooLong('Hello World !');
    
    console.log(isTooLong);
  } catch (error) {
    console.log(error);
  }
  
  try {
    const diff = await intDiff(4, 5);
    
    console.log(diff);
  } catch (error) {
    console.log(error);
  }
  
  try {
    const aImMajor = await isMajor('21/04/1998');
    
    console.log(aImMajor);
  } catch (error) {
    console.log(error);
  }
}

execute();


// Exo 6 
const axiosExecute = async () => {
  const baseUrl = 'https://swapi.py4e.com/api';
  try {
    const response = await axios.get(`${ baseUrl }/starships/10`);
    console.log('starship id 10', response.data);
  } catch (error) {
    console.log(error);
  }

  try {
    const response = await axios.get(`${ baseUrl }/planets`);
    console.log('total planets', response.data.count);
  } catch (error) {
    console.log(error);
  }

  try {
    const response = await axios.get(`${ baseUrl }/people?search=Darth  Vader`);
    console.log('Darth Vader birth year', response.data.results[0].birth_year);
  } catch (error) {
    console.log(error);
  }

  try {
    const response = await axios.get(`${ baseUrl }/people/13?format=wookiee`);
    console.log('People id 13 wookiee', response.data);
  } catch (error) {
    console.log(error);
  }

  try {
    const response = await axios.get(`${ baseUrl }/people?search=r2-d2`);
    const responseHomeworld = await axios.get(response.data.results[0].homeworld);
    console.log('R2-D2 Homeworld residents', responseHomeworld);
  } catch (error) {
    console.log(error);
  }
}

axiosExecute();