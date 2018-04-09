import React from 'react'
import { Link } from 'react-router-dom'

// No _Brand_ thing, just Links from Left-to-Right
// Include a Dropdown that goes into Sub destinations

// IDEAS:
// Pass an Array of Top Level and then

const MainNavBar = ({ ...props }) => {
  let navbarClasses = ['navbar', 'navbar-expand-sm', 'navbar-dark', 'bg-dark']
  let navItemClasses = ['nav-item']
  return (
    <nav className={navbarClasses.join(' ')}>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mr-auto">
          <li className={navItemClasses.join(' ')}>
            <Link className="nav-link" to={'/'}>
              Home
          </Link>
          </li>
          <li className={navItemClasses.join(' ')}>
            <Link className="nav-link" to={'/test'}>
              Testing
          </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default MainNavBar
