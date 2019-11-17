import { GET_TOURNAMENTS, CLEAR_TOURNAMENTS } from '../constants/tournaments'

export const getTournaments = (query) => {
    return {
        type: GET_TOURNAMENTS,
        payload: query
    }
}

export const clearTournaments = () => {
    return {
        type: CLEAR_TOURNAMENTS,
    }
}