import * as tournaments from './tournaments';
import * as favorites from './favorites';
import * as entities from './entities';
import * as ui from './ui';

export default {
    ...tournaments,
    ...favorites,
    ...entities,
    ...ui
}