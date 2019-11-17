import { GET_TOURNAMENTS } from '../constants/tournaments'

export const getTournaments = (query) => {
    return {
        type: GET_TOURNAMENTS,
        payload: query
    }
}