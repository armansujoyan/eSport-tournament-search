import { SET_DIALOGUE_STATE, SET_DROPDOWN_STATE } from '../constants/ui'

const initialState = {
    showDialogue: false,
    showDropdown: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case SET_DIALOGUE_STATE:
        return { ...state, showDialogue: payload }
    case SET_DROPDOWN_STATE:
        return { ...state, showDropdown: payload}
    default:
        return state
    }
}
