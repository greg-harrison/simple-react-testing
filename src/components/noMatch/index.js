import React from 'react'
import PropTypes from 'prop-types'

const NoMatch = ({ className, ...props }) => {
  return (
    <div>404</div>
  );
}

NoMatch.propTypes = {
  className: PropTypes.string
}

export default NoMatch
