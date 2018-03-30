import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../store/actions'

// TodoForm is using REFERENCE (or 'ref') to access the actual DOM element.
// -- titleInput is receiving a constantly up-to-date version of the DOM Node.
//
// Should only use REF in an UNCONTROLLED Component. Otherwise e.target.value is PREFERRED

const TodoForm = ({ addTodo }) => {
  let titleInput
  let descriptionInput
  let error = {}

  function submitTodo(e) {
    e.preventDefault()
    error.title = false
    error.description = false

    if (!titleInput.value.trim()) {
      return
    }
    if (titleInput.value.length > 30) {
      error.title = true
      return
    }
    if (descriptionInput.value.length > 100) {
      error.description = true
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
          <p className={"p-0 m-0 " + (!!error.title ? 'error' : '')}>
            <span>Title</span>
            {!!error.title && (<span> is too long</span>)}
          </p>
          <input ref={node => titleInput = node} />
        </label>
        <label>
          <p className={"p-0 m-0 " + !!error.description ? 'error' : ''}>
            Description
            {error.description && <span> is too long</span>}
          </p>
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
