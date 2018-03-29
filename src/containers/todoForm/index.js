import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../store/actions'

const TodoForm = ({ addTodo }) => {
  let titleInput
  let descriptionInput

  function submitTodo(e) {
    e.preventDefault()
    if (!titleInput.value.trim()) {
      return
    }
    addTodo(titleInput.value, descriptionInput.value)
  }

  return (
    <div>
      <form onSubmit={e => submitTodo(e)}>
        <input ref={node => titleInput = node} />
        <input ref={node => descriptionInput = node} />
        <button type="submit">
          Add
        </button>
      </form>
    </div>
  )
}

export default connect(
  () => ({}),
  {
    addTodo
  }
)(TodoForm)
