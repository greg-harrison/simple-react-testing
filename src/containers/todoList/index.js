import React from 'react'
import { pure } from 'recompose'

import { connect } from 'react-redux'
import { toggleTodo } from '../../store/actions'

import DisplayCard from '../../components/displayCard/displayCard'
import Toggle from '../../components/toggle/toggle'

const getTodos = (data) => data.todos

const TodoList = pure(({ todos, toggleTodo }) => {

  function toggle(id) {
    toggleTodo(id)
  }

  return (
    <div>
      {todos.map(todo =>
        (
          <DisplayCard
            className={todo.completed ? 'completed' : ''}
            cardTitle={todo.title}>
            <strong>
              {todo.description}
            </strong>
            <Toggle onToggle={() => toggle(todo.id)} />
          </DisplayCard>
        )
      )}
    </div>
  )
})

export default connect(
  (state) => ({
    todos: getTodos(state)
  }),
  ({
    toggleTodo
  }),
)(TodoList)
