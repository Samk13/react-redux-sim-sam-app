## Bygg en webbapplikation med denna design i React + redux

[example](https://reactjs.org/community/examples.html)
På varje sida kan man lägga till, ta bort och redigera en artikel.
Förutom state-management (redux tex), använd inga third-party-komponenter (tex input-komponenter, layout etc), bygg alla komponenter och logik själv. CSS kan tas från färdiga exempel men komponents-logik från scratch.
Kan ha avstämning varje eller varannan dag och diskutera progress och utveckling.
Gör look&feel tema-baserad med vanilla-css variabler.

## Todos
- [ ] restyle input form, looks empty now
- [ ] consistent margins
- [x] new articles should appear on top
- [ ] show some feedback when new article is created

## done:
- [x] Put CRUD (create, read, update, delete) operations connected to localStorage. Meaning if you create a new article, it will be persisted in window.localStorage. If you edit it, it will update the existing item in localStorage etc. Then read from localStorage during initial load and put in store. When editing -> Update in your store, then “request” change in your localStorage (can be seen as a mocked backend/database).
- [x] Put requests in a separate file, e.g /Service/Api.js
- [x] Return response and put in your redux store -> Then read from store to populate the fetched articles
- [x] Clean up styling - align input/labels,
- [x] Color schemes - compare to https://reactjs.org/docs/getting-started.html What makes the texts/menu easy to read and nice to look at? Where are the primary/secondary colors used?
- [x] Highlighting the vital stuff - what’s most important that the user sees? How does the page communicate that a tab is selected for example? Display Submit buttons in different ways and hierarchy - should the “Submit-save”, edit and delete buttons all look the same?
- [x] eject react app
- [x] setup eslint
- [x] setup prettier
- [x] optimize Eslint with Prettier
- [x] setup husky for pre-commits
- [x] Create auto import index for components
  - [x] finish redux logic
  - [x] create article
  - [x] show articles
  - [x] show articles
  - [x] Delete Article
  - [x] Edit Article
  - [x] toggle seen
  - [x] merge conflict resolved
  - [x] create input components
  - [x] better styling home page
  - [x] cleanup css
  - [x] textarea components
  - [x] fix input bug
  - [x] button component
  - [x] upgrade green and yellow dependencies
  - [x] move devDependencies from dependencies

## Available Scripts

In the project directory, you can run:

### `npm run start` or `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
