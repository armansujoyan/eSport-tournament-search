export const tournamentIdsSelector = state => state.app.tournaments.elements;
export const tournamentEntitesSelector = state => state.app.entities.tournaments;

export const tournamentSelector = state => {
    const tournaments = tournamentIdsSelector(state);
    const entities = tournamentEntitesSelector(state);
    return tournaments.map(t => entities[t]);
}

export const tournamentLoadSelector = state => state.app.tournaments.isLoading;