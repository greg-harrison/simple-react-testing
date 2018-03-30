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
    titleInput.value = ''
    descriptionInput.value = ''
  }

  return (
    <div>
      <form className="cardForm" onSubmit={e => submitTodo(e)}>
        <label>
          <p className="p-0 m-0">Title</p>
          <input ref={node => titleInput = node} />
        </label>
        <label>
          <p className="p-0 m-0">Description</p>
          <input ref={node => descriptionInput = node} />
        </label>
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
