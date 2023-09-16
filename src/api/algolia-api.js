import axios from "axios";

const algoaxios = axios.create({
    baseURL: 'http://hn.algolia.com/api/v1/',
})

export async function search(query, token) {
    const response = await algoaxios.get('search', {
        params: {
            query
        },
        signal: token
    })
    return response.data.hits
}

// {
//     "created_at": "2018-03-14T03:50:30.000Z",
//     "title": "Stephen Hawking has died",
//     "url": "http://www.bbc.com/news/uk-43396008",
//     "author": "Cogito",
//     "points": 6015,
//     "story_text": null,
//     "comment_text": null,
//     "num_comments": 436,
//     "story_id": null,
//     "story_title": null,
//     "story_url": null,
//     "parent_id": null,
//     "created_at_i": 1520999430,
//     "relevancy_score": 8012,
//     "_tags": [
//         "story",
//         "author_Cogito",
//         "story_16582136"
//     ],
//     "objectID": "16582136",
//     "_highlightResult": {
//         "title": {
//             "value": "Stephen Hawking has died",
//             "matchLevel": "none",
//             "matchedWords": []
//         },
//         "url": {
//             "value": "http://www.bbc.com/news/uk-43396008",
//             "matchLevel": "none",
//             "matchedWords": []
//         },
//         "author": {
//             "value": "Cogito",
//             "matchLevel": "none",
//             "matchedWords": []
//         }
//     }
// }