import React from 'react'

export function SearchBar({ className, ...props }) {
  return (
    // The goal of this is to make something that looks nice when stretched out
    // Should contain buttons

    <div className={`p-0 ${className}`}>
      <input
        type="text"
        placeholder="Search..."
      />
    </div>
  )
}
