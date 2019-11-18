export const tournamentEntitesSelector = state => state.entities.tournaments;
export const favoriteIdSelector = state => state.favorites;

export const favoritesSelector = state => {
    const entities = tournamentEntitesSelector(state);
    const favoriteIds = favoriteIdSelector(state);
    return favoriteIds.map(t => entities[t]);
}