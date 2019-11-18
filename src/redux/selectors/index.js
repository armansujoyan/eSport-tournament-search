import * as tournamentSelectors from './tournaments';
import * as favoriteSelectors from './favorites'
import * as uiSelectors from './ui';

export default {
    ...tournamentSelectors,
    ...favoriteSelectors,
    ...uiSelectors,
}