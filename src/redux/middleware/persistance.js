import { ADD_FAVORITE, DELETE_FAVORITE } from '../constants/favorites';
import { ADD_TOURNAMENT_ENTITIES } from '../constants/entities';
import { union } from 'lodash';
import { favoriteIdSelector } from '../selectors/favorites';
import { tournamentEntitesSelector } from '../selectors/tournaments'

export default store => next => action => {
    const { type, payload } = action;
    const state = store.getState();
    const favorites = favoriteIdSelector(state);
    const tournamentEntities = tournamentEntitesSelector(state);
    switch (type) {
        case ADD_FAVORITE:
            const addNextFavorites = union(favorites, [ payload ]);
            localStorage.setItem('tournaments:favorites', JSON.stringify(addNextFavorites));
            break;
        case DELETE_FAVORITE:
            const itemIndex = favorites.findIndex(id => id === payload);
            const delNextFavorites = [
                ...favorites.slice(0, itemIndex),
                ...favorites.slice(itemIndex+1, favorites.lenght)
            ];
            localStorage.setItem('tournaments:favorites', JSON.stringify(delNextFavorites));
            break;
        case ADD_TOURNAMENT_ENTITIES:
            const addNextTournaments = { tournaments: {
                ...tournamentEntities, ...payload
            }};
            localStorage.setItem('tournaments:entities', JSON.stringify(addNextTournaments));
            break;
        default:
            break;
    }
    next(action);
}