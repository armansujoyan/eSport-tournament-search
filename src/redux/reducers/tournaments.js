import {
    GET_TOURNAMENTS_SUCCESS,
    GET_TOURNAMENTS_ERROR
} from '../constants/tournaments'

const initialState = {
    elements: [],
    error: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case GET_TOURNAMENTS_SUCCESS:
        return {
            elements: payload,
            error: ''
        }
    case GET_TOURNAMENTS_ERROR:
        return {
            error: payload,
            elements: []
        }
    default:
        return state
    }
}
