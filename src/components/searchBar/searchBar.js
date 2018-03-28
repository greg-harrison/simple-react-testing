import React from 'react'
import './searchBar.css'

export function SearchBar({ className, ...props }) {
  return (
    // Use labels

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
