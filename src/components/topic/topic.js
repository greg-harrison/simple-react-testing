import React from 'react'
import PropTypes from 'prop-types'

const Topic = ({ match }) => {
  return (
    <div>
      <h4>{match.params.topicId}</h4>
    </div>
  )
}

Topic.propTypes = {
  match: PropTypes.object.isRequired
}

export default Topic
