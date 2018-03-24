import React from 'react'
import './searchBar.css'

export function SearchBar({ className, ...props }) {
  return (
    // The goal of this is to make something that looks nice when stretched out
    // Should contain buttons
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
