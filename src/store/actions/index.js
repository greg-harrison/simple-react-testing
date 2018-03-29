let todoId = 0
export const addTodo = (title, description) => ({
  type: 'ADD_TODO',
  id: todoId++,
  title,
  description
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})
