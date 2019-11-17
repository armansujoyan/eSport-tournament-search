import {
    GET_TOURNAMENTS_SUCCESS,
    GET_TOURNAMENTS_ERROR,
    GET_TOURNAMENTS,
    CLEAR_TOURNAMENTS
} from '../constants/tournaments'

const initialState = {
    elements: [],
    error: '',
    isLoading: false,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case GET_TOURNAMENTS:
        return {
            ...state,
            isLoading: true
        }
    case GET_TOURNAMENTS_SUCCESS:
        return {
            elements: payload,
            error: '',
            isLoading: false
        }
    case GET_TOURNAMENTS_ERROR:
        return {
            error: payload,
            isLoading: false,
            elements: []
        }
    case CLEAR_TOURNAMENTS:
        return {
            error: '',
            elements: []
        }
    default:
        return state
    }
}
