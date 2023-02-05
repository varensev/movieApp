interface IPopularity {
    id: number
    value: string | number
    popularity: string | number
}

const sortPopularity: IPopularity[] = [
    {
        popularity: "Популярные по убыванию",
        value: "POPULARITY_DOWN",
        id: 1,
    },
    {
        popularity: "Популярные по возрастанию",
        value: "POPULARITY_UP",
        id: 2,
    },
    {
        popularity: "Рейтинг по убыванию ",
        value: "VOTE_AVERAGE_DOWN",
        id: 3,
    },
    {
        popularity: "Рейтинг по возрастанию",
        value: "VOTE_AVERAGE_UP",
        id: 4,
    }
]


const sortYear: IPopularity[] = [
    {
        popularity: 2020,
        value: 2020,
        id: 4,
    },
    {
        popularity: 2019,
        value: 2019,
        id: 3,
    }, {
        popularity: 2018,
        value: 2018,
        id: 2,
    },
    {
        popularity: 2017,
        value: 2017,
        id: 1,
    },
]

const labelData = {
    typeSort: {
        sort: "Сортировка по:",
        year: "Год релиза:"
    },
    htmlFor: "sort-film"
}

const pageNumber = {
    currentPage: 1,
    countMovie: 6
}

export {sortPopularity, sortYear , labelData , pageNumber}
