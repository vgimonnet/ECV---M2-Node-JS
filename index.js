// Exo 1
const isTooLong = (string) => {
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
    const birthDate = new Date(date);
    const today = new Date();

    Math.floor((today-birthDate)/31557600000) < 18
    ? reject('You\'re minor')
    : resolve(true);
  });
}

// Exo 4
isTooLong('Hello World !')
.then((response) => console.log(response))
.catch((error) => console.log(error));

intDiff(4, 5)
.then((response) => console.log(response))
.catch((error) => console.log(error));

isMajor('21/04/1998')
.then((response) => console.log(response))
.catch((error) => console.log(error));