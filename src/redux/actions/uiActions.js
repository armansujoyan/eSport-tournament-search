import { SET_DIALOGUE_STATE, SET_DROPDOWN_STATE } from '../constants/ui'

export const setDialogueVisibility = visibility => ({
    type: SET_DIALOGUE_STATE,
    payload: visibility
})

export const setDropdownVisibility = visibility => ({
    type: SET_DROPDOWN_STATE,
    payload: visibility
})