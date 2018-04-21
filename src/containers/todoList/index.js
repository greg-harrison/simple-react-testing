import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { toggleTodo, fetchTodos } from '../../store/actions'

import DisplayCard from '../../components/displayCard/displayCard'
import Toggle from '../../components/toggle/toggle'

class TodoList extends React.Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    this.props.fetchTodos();
  }

  toggle(id) {
    this.props.toggleTodo(id)
  }

  render() {
    const { todos } = this.props

    return (<div>
      {
        todos.map(todo => {
          return (
            <DisplayCard
              className={todo.completed ? 'completed' : ''}
              cardTitle={todo.title}>
              <span className="card-body-description">
                {todo.description}
              </span>
              <Toggle onToggle={() => this.toggle(todo.id)} />
            </DisplayCard>
          )
        }
        )
      }
    </div >
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array,
  toggleTodo: PropTypes.func
}

export default connect(
  (state) => ({
    todos: []
  }),
  ({
    toggleTodo,
    fetchTodos
  }),
)(TodoList)
