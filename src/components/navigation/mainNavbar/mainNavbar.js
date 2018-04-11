import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class MainNavBar extends React.Component {
  static propTypes = {
    navbarClasses: PropTypes.array
  }

  shouldComponentUpdate() {
    // Best to do a shouldComponentUpdate->False on Static features of the App
    return false
  }

  render() {
    let navItemClasses = ['nav-item']
    let { navbarClasses } = this.props

    return (
      <nav className={navbarClasses.join(' ')}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mr-auto">
            <li className={navItemClasses.join(' ')}>
              <Link className="nav-link" to={'/'}>
                Home
              </Link>
            </li>
            <li className={navItemClasses.join(' ')}>
              <Link className="nav-link" to={'/gifs'}>
                Gifs
              </Link>
            </li>
            <li className={navItemClasses.join(' ')}>
              <Link className="nav-link" to={'/topics'}>
                Topics
              </Link>
            </li>
            <li className={navItemClasses.join(' ')}>
              <Link className="nav-link" to={'/brokenlink'}>
                404 Test
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
