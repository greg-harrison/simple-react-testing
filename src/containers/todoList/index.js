import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { toggleTodo, fetchTodos } from '../../store/actions'
import { getVisibleTodos, getErrorMessage, getIsFetching } from '../../store/reducers';

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
          console.log('todo', todo);
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
  (state) => {
    return {
      isFetching: getIsFetching(state.todos),
      errorMessage: getErrorMessage(state.todos),
      todos: getVisibleTodos(state.todos),
    }
  },
  (dispatch) => ({
    toggleTodo: () => dispatch(toggleTodo()),
    fetchTodos: () => dispatch(fetchTodos())
  }),
)(TodoList)
