import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import store from './app/store'
import App from './App'
import { describe } from 'jest-circus'

const AppComponent = (
  <Provider store={store}>
    <App />
  </Provider>
)
// const render = (component) => {
//   const root = document.createElement('div')
//   ReactDOM.render(component, root)
//   return getQueriesForElement(root)
// }

describe('<App /> render', () => {
  test('<App />', () => {
    const { getByText, getByLabelText } = render(AppComponent)
    expect(getByText('Articles')).not.toBeNull()
    expect(getByText('Async Posts')).not.toBeNull()
    expect(getByText('React-reduxToolKit')).not.toBeNull()
    expect(getByText).toBe(getByText)
  })
})
