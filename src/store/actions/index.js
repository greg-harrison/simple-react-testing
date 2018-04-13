import { v4 } from 'node-uuid';

export const addTodo = (title, description) => ({
  type: 'ADD_TODO',
  id: v4(),
  title,
  description
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})
