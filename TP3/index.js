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
const f = async () => {
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

f();