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
      {todos.map(todo => {
        console.log('todo', todo);
        return (
          <DisplayCard
            className={todo.completed ? 'completed' : ''}
            cardTitle={todo.title}>
            <span className="card-body-description">
              {todo.description}
            </span>
            <Toggle onToggle={() => toggle(todo.id)} />
          </DisplayCard>
        )
      }
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
