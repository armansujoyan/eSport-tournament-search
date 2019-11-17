import { createSelector } from 'reselect';

const tournamentsSelector = createSelector(state => state.tournaments.elements);
const tournamentEntitesSelector = createSelector(state => state.entites.tournaments);

export const getTournamentSelector = () => createSelector(
    tournamentsSelector,
    tournamentEntitesSelector,
    (tournaments, entities) => tournaments.map(t => entities[t])
);