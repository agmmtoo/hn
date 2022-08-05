import axios from 'axios';

const hnaxios = axios.create({
    baseURL: 'https://hacker-news.firebaseio.com/v0/',
    timeout: 10000,
});

export async function fetchStories(tab) {
    try {
        const res = await hnaxios.get(`${tab}.json`);
        return res.data;
    } catch (err) {
        throw err;
    }
}

export async function fetchStory(id) {
    try {
        const res = await hnaxios.get(`item/${id}.json`);
        return res.data;
    } catch (err) {
        throw err;
    }
}