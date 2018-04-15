import React from 'react'
import PropTypes from 'prop-types'
import './searchBar.css'

const SearchBar = ({ className, ...props }) => {
  return (
    <div className={`searchBar ${className}`}>
      <input
        className="searchBar_input"
        type="text"
        placeholder="Search..."
      />
      <div>
        Test
      </div>
    </div>
  )
}

SearchBar.propTypes = {
  className: PropTypes.string
}

export default SearchBar
