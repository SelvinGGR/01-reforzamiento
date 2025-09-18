import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = 'ZSc1U0QIX7WtroWBjcs9GxWh8GsjvRHc';

const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.append(imgElement);
};

const getRandomImageURL = async (): Promise<string> => {
    const response = await fetch(`https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}`);
    const json: GiphyRandomResponse = await response.json();
    return json.data.images.original.url;
};

getRandomImageURL().then(url => createImageInsideDOM(url));



























