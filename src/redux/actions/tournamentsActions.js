import { GET_TOURNAMENTS } from '../constants'

export const getTournaments = (query) => {
    return {
        type: GET_TOURNAMENTS,
        payload: query
    }
}