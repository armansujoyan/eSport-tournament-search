## eSport tournaments search

Simple search for finding the top eSport tournaments.

### `Starting the Project`

Clone this project to your machine via `git clone` and after navigating to the project directory in your terminal, run `yarn` or `npm install` to install all the dependencies. After all the dependencies are installed, run `yarn start` or `npm start` in order to run the application. The default port is `3000`.

### `Building the Project`

In order to get the production ready and optimized application bundle run `yarn build` or `npm run build`. This will build the app for production to the `build` folder.

### `Dependencies`

* @material-ui/core
* @material-ui/icons
* lodash
* react
* react-dom
* react-redux
* react-scripts
* redux
* redux-devtools-extension
* redux-saga

### `Description and Usage`

The UI of the application is pretty simple and intuititve. When the app is loaded, the search bar on top is automatically focused and ready to recieve an input. Search results are displayed inside the dropdown while user is typing. In order to avoid overfetching throttling is used. If the connection of the user is slow, circular loader will be shown in the dropdown which indicates that the results are being loaded. When the search results are empty the list will display corresponding message. All the favorite items of the user are displayed under the search bar. In order to add tournament to favorites the user has to click on the desired item from the search dropdown. The trash bin icon on the end of the favorites list item will remove the item from favorites. All the favorite items are persisted in the local storage.

### `Redux Store`

The store is divided into two parts `ui` and `app`. The `ui`  contains all the data for controlling UI state. Canonical data is normalized and stored inside the `app`. All the entities are saved inside `entities` property. Async actions are handled via `saga` middleware which works on top of generators.

## `Further Improvements`
* Serialization
* Memoization
* Better styling