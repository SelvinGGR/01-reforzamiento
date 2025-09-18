import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = 'ZSc1U0QIX7WtroWBjcs9GxWh8GsjvRHc';

const myRequest = fetch(`https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}`);




const createImageInsideDOM = (url:string) =>{

 const imgElement = document.createElement('img');
        imgElement.src = url;
        document.body.append(imgElement);
};



myRequest
    .then((response) => response.json())
    .then(({data}: GiphyRandomResponse) => {
    
        const imageUrl= data.images.original.url;
     createImageInsideDOM(imageUrl);

       

    })
    .catch((err) => {
        console.error(err);
    });






























