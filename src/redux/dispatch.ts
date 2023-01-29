import {store} from "./reducer";
import {
    afterPage, authorization,
    beforePage, favorites,
    popularityDown,
    popularityUp,
    sortGenres,
    sortYear,
    voteAverageDown,
    voteAverageUp, watchLater
} from "./action";


export const sortPopularityDown = (payload: string) => store.dispatch(popularityDown(payload))
export const sortPopularityUp = (payload: string) => store.dispatch(popularityUp(payload))
export const sortVoteAverageDown = (payload: string) => store.dispatch(voteAverageDown(payload))
export const sortVoteAverageUp = (payload: string) => store.dispatch(voteAverageUp(payload))
export const sortMoviesYear = (payload: string) => store.dispatch(sortYear(payload))
export const setAfterPage = (payload: number) => store.dispatch(afterPage(payload))

export const setBeforePage = (payload: number) => store.dispatch(beforePage(payload))
export const sortMoviesGenres = (payload: number[]) => store.dispatch(sortGenres(payload))
export const userAuthorization = (payload: string | null) => store.dispatch(authorization(payload))
export const sortFavorites = (payload: string[]) => store.dispatch(favorites(payload))
export const sortWatchLater = (payload: string[]) => store.dispatch(watchLater(payload))


