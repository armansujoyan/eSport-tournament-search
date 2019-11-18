import { combineReducers } from "redux";

import favorites from './favorites';
import tournaments from './tournaments';
import entities from './entities';
import ui from './ui';

export default combineReducers({
    favorites,
    tournaments,
    entities,
    ui
});