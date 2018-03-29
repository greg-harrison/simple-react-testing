import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../store/actions'

const TodoForm = ({ addTodo }) => {
  let input

  return (
    <div>
      <span>Hello world</span>
    </div>
  )
}

export default connect(
  () => ({}),
  {
    addTodo
  }
)(TodoForm)
