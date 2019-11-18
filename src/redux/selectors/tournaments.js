const tournamentIdsSelector = state => state.tournaments.elements;
const tournamentEntitesSelector = state => state.entities.tournaments;

export const tournamentSelector = state => {
    const tournaments = tournamentIdsSelector(state);
    const entities = tournamentEntitesSelector(state);
    return tournaments.map(t => entities[t]);
}

export const tournamentLoadSelector = state => state.tournaments.isLoading;