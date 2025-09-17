const API_KEY = 'ZSc1U0QIX7WtroWBjcs9GxWh8GsjvRHc';

const myRequest = fetch(`https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}`);

myRequest
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.error(err);
    });




















