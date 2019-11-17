const tournamentsSelector = state => state.tournaments.elements;
const tournamentEntitesSelector = state => state.entites.tournaments;

export const tournamentSelector = state => {
    const tournaments = state.tournaments.elements;
    const entities = state.entities.tournaments;
    return tournaments.map(t => entities[t]);
}

export const tournamentLoadSelector = state => state.tournaments.isLoading;