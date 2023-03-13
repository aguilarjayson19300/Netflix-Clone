interface moviesByCategories {
    category: string,
    movies: { name: string, imgSrc: string, vidSrc: string, top: string}[],
  }

export const moviesByCategories = [
    {
        category: 'Continue Watching',
        movies: [
            { top: '1', name: 'Moana', imgSrc: './movies/movie1 (1).jpg', vidSrc: '/movies/moana.mp4' },
            { top: '2', name: 'Iskandalo ',imgSrc: './movies/movie1 (2).jpg', vidSrc: '/movies/iskandalo.mp4' },
            { top: '3', name: 'Jowable', imgSrc: './movies/movie1 (3).jpg', vidSrc: '/movies/moana.mp4' },
            { top: '4', name: 'NUUK', imgSrc: './movies/movie1 (4).jpg', vidSrc: '/movies/iskandalo.mp4' },
            { top: '5', name: 'Oppa', imgSrc: './movies/movie1 (5).jpg', vidSrc: '/movies/moana.mp4' },
            { top: '7', name: 'Exit', imgSrc: './movies/movie1 (7).jpg', vidSrc: '/movies/moana.mp4' },
            { top: '8', name: 'Oblivion', imgSrc: './movies/movie1 (8).jpg', vidSrc: '/movies/iskandalo.mp4' },
            { top: '9', name: 'Petter Rabbit', imgSrc: './movies/movie1 (9).jpg', vidSrc: '/movies/moana.mp4'},
            { top: '10', name: 'Godzilla', imgSrc: './movies/movie1 (10).jpg', vidSrc: '/movies/iskandalo.mp4' },
            { top: '11', name: '1917', imgSrc: './movies/movie1 (11).jpg', vidSrc: '/movies/moana.mp4' }
        ]
    },
    {
        category: 'Top 10',
        movies: [
            { top: '7', name: 'Exit', imgSrc: './movies/movie1 (7).jpg', vidSrc: '/movies/moana.mp4' },
            { top: '8', name: 'Oblivion', imgSrc: './movies/movie1 (8).jpg', vidSrc: '/movies/iskandalo.mp4' },
            { top: '9', name: 'Petter Rabbit', imgSrc: './movies/movie1 (9).jpg', vidSrc: '/movies/moana.mp4'},
            { top: '10', name: 'Godzilla', imgSrc: './movies/movie1 (10).jpg', vidSrc: '/movies/iskandalo.mp4' },
            { top: '11', name: '1917', imgSrc: './movies/movie1 (11).jpg', vidSrc: '/movies/moana.mp4' },
            { top: '1', name: 'Moana', imgSrc: './movies/movie1 (1).jpg', vidSrc: '/movies/moana.mp4' },
            { top: '2', name: 'Iskandalo ',imgSrc: './movies/movie1 (2).jpg', vidSrc: '/movies/iskandalo' },
            { top: '3', name: 'Jowable', imgSrc: './movies/movie1 (3).jpg', vidSrc: '/movies/moana.mp4' },
            { top: '4', name: 'NUUK', imgSrc: './movies/movie1 (4).jpg', vidSrc: '/movies/iskandalo.mp4' },
            { top: '5', name: 'Oppa', imgSrc: './movies/movie1 (5).jpg', vidSrc: '/movies/moana.mp4' }
        ]
    },
    {
        category: 'TV Shows',
        movies: [
            { top: '1', name: 'Moana', imgSrc: './movies/movie1 (1).jpg', vidSrc: '/movies/moana.mp4' },
            { top: '2', name: 'Iskandalo ',imgSrc: './movies/movie1 (2).jpg', vidSrc: '/movies/iskandalo.mp4' },
            { top: '3', name: 'Jowable', imgSrc: './movies/movie1 (3).jpg', vidSrc: '/movies/moana.mp4' },
            { top: '4', name: 'NUUK', imgSrc: './movies/movie1 (4).jpg', vidSrc: '/movies/iskandalo.mp4' },
            { top: '5', name: 'Oppa', imgSrc: './movies/movie1 (5).jpg', vidSrc: '/movies/moana.mp4' },
            { top: '7', name: 'Exit', imgSrc: './movies/movie1 (7).jpg', vidSrc: '/movies/moana.mp4' },
            { top: '8', name: 'Oblivion', imgSrc: './movies/movie1 (8).jpg', vidSrc: '/movies/iskandalo.mp4' },
            { top: '9', name: 'Petter Rabbit', imgSrc: './movies/movie1 (9).jpg', vidSrc: '/movies/moana.mp4'},
            { top: '10', name: 'Godzilla', imgSrc: './movies/movie1 (10).jpg', vidSrc: '/movies/iskandalo.mp4' },
            { top: '11', name: '1917', imgSrc: './movies/movie1 (11).jpg', vidSrc: '/movies/moana.mp4' }
        ]
    }
]

export default {
    moviesByCategories
}