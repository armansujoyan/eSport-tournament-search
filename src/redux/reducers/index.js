import { combineReducers } from "redux";

import ui from './ui';
import app from './app'

export default combineReducers({
    app,
    ui
});