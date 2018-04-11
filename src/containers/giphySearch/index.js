import React from 'react'
import PropTypes from 'prop-types'

const GiphySearch = ({ className, ...props }) => {
  return (
    <div>
      <ul>
        <li>Want to use the GiphyAPI to search and pull items back.</li>
        <li>Want to load these values into a Redux Store</li>
        <li>Want to use different states (Ready, Loading, Done) to show a loading animation while it's making the request</li>
      </ul>
      <a className="clearfix" href="https://developers.giphy.com/docs/" target="_blank">
        Giphy Documentation
      </a>
      <a className="clearfix" href="https://medium.com/styled-components/component-folder-pattern-ee42df37ec68" target="_blank">
        Medium post that I must have taken this idea from subconciously.
      </a>
    </div>
  );
}

GiphySearch.propTypes = {
  className: PropTypes.string
}

export default GiphySearch
