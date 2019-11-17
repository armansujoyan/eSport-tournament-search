import * as tournaments from './tournaments';
import * as favorites from './favorites';
import * as entities from './entities'

export default {
    ...tournaments,
    ...favorites,
    ...entities
}