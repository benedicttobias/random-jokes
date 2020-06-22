export const JokeCategory = [
    {
        id: 'chuckNorris',
        name: "Chuck Norris",
        url: 'https://api.chucknorris.io/jokes/random'
    },
    {
        id: 'nsfw',
        name: "NSFW",
        url: 'https://sv443.net/jokeapi/v2/joke/Miscellaneous?blacklistFlags=religious,political,racist,sexist&type=single'
    },
    {
        id: 'religious',
        name: "Religious",
        url: 'https://sv443.net/jokeapi/v2/joke/Miscellaneous?blacklistFlags=nsfw,political,racist,sexist&type=single'
    },
    {
        id: 'political',
        name: "Political",
        url: 'https://sv443.net/jokeapi/v2/joke/Miscellaneous?blacklistFlags=nsfw,religious,racist,sexist&type=single'
    }
]