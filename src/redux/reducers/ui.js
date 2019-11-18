import {
    SET_DIALOGUE_STATE,
    SET_DROPDOWN_STATE,
    SET_DROPDOWN_LOADER_STATE
} from '../constants/ui'

const initialState = {
    showFavoritesDeleteDialogue: false,
    showSearchDropdown: false,
    showDropdownLoader: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case SET_DIALOGUE_STATE:
        return { ...state, showFavoritesDeleteDialogue: payload }
    case SET_DROPDOWN_STATE:
        return { ...state, showSearchDropdown: payload }
    case SET_DROPDOWN_LOADER_STATE:
        return { ...state, showDropdownLoader: payload }
    default:
        return state
    }
}
