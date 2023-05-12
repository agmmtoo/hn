import axios from "axios";

const algoaxios = axios.create({
    baseURL: 'http://hn.algolia.com/api/v1/',
})

export async function fetchStories(tab) {