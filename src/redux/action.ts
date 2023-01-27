export const AFTER = "AFTER"
export const BEFORE = "BEFORE"
export const POPULARITY_DOWN = "POPULARITY_DOWN"
export const POPULARITY_UP = "POPULARITY_UP"
export const VOTE_AVERAGE_DOWN = "VOTE_AVERAGE_DOWN"
export const VOTE_AVERAGE_UP = "VOTE_AVERAGE_UP"
export const SORT_YEAR = "SORT_YEAR"
export const SORT_GENRES = "SORT_GENRES"
export const AUTHORIZATION = "AUTHORIZATION"


const actionCreator = (type: string) => (payload: string) => ({type, payload})
export const afterPage = actionCreator(AFTER)
export const beforePage = actionCreator(BEFORE)
export const popularityDown = actionCreator(POPULARITY_DOWN)
export const popularityUp = actionCreator(POPULARITY_UP)
export const voteAverageDown = actionCreator(VOTE_AVERAGE_DOWN)
export const voteAverageUp = actionCreator(VOTE_AVERAGE_UP)
export const sortYear = actionCreator(SORT_YEAR)
export const sortGenres = actionCreator(SORT_GENRES)
export const authorization = actionCreator(AUTHORIZATION)
