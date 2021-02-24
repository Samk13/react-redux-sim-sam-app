## Bygg en webbapplikation med denna design i React + redux

[example](https://reactjs.org/community/examples.html)
På varje sida kan man lägga till, ta bort och redigera en artikel.
Förutom state-management (redux tex), använd inga third-party-komponenter (tex input-komponenter, layout etc), bygg alla komponenter och logik själv. CSS kan tas från färdiga exempel men komponents-logik från scratch.
Kan ha avstämning varje eller varannan dag och diskutera progress och utveckling.
Gör look&feel tema-baserad med vanilla-css variabler.

# updates:

- [x] eject react app
- [x] setup eslint
- [x] setup prettier
- [x] optimize Eslint with Prettier
- [x] setup husky for pre-commits
- [x] Create auto import index for components
- [] finish redux logic
  - [x] create article
  - [x] show articles
  - [x] show articles
  - [x] Delete Article
  - [x] Edit Article
  - [x] toggle seen
  - [x] merge conflict resolved
  - [ ] create input components
  - [ ] textarea components
  - [ ] form components
- [] better styling home page
- [] cleanup css

Simon Todolist

- [] Put CRUD (create, read, update, delete) operations connected to localStorage. Meaning if you create a new article, it will be persisted in window.localStorage. If you edit it, it will update the existing item in localStorage etc. Then read from localStorage during initial load and put in store. When editing -> Update in your store, then “request” change in your localStorage (can be seen as a mocked backend/database).
- [] Put requests in a separate file, e.g /Service/Api.js
- [] Return response and put in your redux store -> Then read from store to populate the fetched articles
- [] Clean up styling - align input/labels, consistent margins
- [] Color schemes - compare to https://reactjs.org/docs/getting-started.html What makes the texts/menys easy to read and nice to look at? Where are the primary/secondary colors used?
- [] Highlighting the vital stuff - what’s most important that the user sees? How does the page communicate that a tab is selected for example? Display Submit buttons in different ways and hierarchy - should the “Submit-save”, edit and delete buttons all look the same?

## questions

- [] use React Transition Group?
- [] explain more how we should show articles in everty page
- [] use local storage to fetch data from

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
