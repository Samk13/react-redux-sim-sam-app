
import React from 'react'
import { Link } from 'react-router-dom'
export default function sidebarComponent() {
    return (

    <aside className="aside">
        <ul>
            <li>
                <Link className="link" to="/">Home</Link>
            </li>
            <li>
                <Link to="/redux">redux page</Link>
            </li>
        </ul>

    </aside>
    )
}
