import React from 'react'
import logo from '../logo.svg';
import { Counter } from '../features/counter/Counter';
import './ReduxPage.css'

export default function ReduxPage() {
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Counter />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <span>
                <span>Learn </span>
                <a
                    className="App-link"
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    React
                </a>
                <a
                    className="App-link"
                    href="https://redux.js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Redux
                </a>
                <a
                    className="App-link"
                    href="https://redux-toolkit.js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Redux Toolkit
                </a>
                <a
                    className="App-link"
                    href="https://react-redux.js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    React Redux
                </a>
                </span>
            </header>
        </div>
    )
}
