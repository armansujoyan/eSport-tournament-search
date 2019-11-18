import { SET_DIALOGUE_STATE, SET_DROPDOWN_STATE } from '../constants/ui'

const initialState = {
    showFavoritesDeleteDialogue: false,
    showSearchDropdown: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case SET_DIALOGUE_STATE:
        return { ...state, showFavoritesDeleteDialogue: payload }
    case SET_DROPDOWN_STATE:
        return { ...state, showSearchDropdown: payload}
    default:
        return state
    }
}
