import { v4 } from 'node-uuid'

const mockDB = {
  todos: [
    {
      id: v4(),
      title: 'Test1',
      description: 'From MockDB',
      completed: true
    },
    {
      id: v4(),
      title: 'Test2',
      description: 'From MockDB',
      completed: false
    },
    {
      id: v4(),
      title: 'Test3',
      description: 'From MockDB',
      completed: true
    },
  ]
}

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = () =>
  delay(500).then(() => {
    return mockDB.todos;
  });

export const addTodo = (text, description) =>
  delay(500).then(() => {
    const todo = {
      id: v4(),
      text,
      description,
      completed: false,
    };
    mockDB.todos.push(todo);
    return todo;
  });

export const toggleTodo = (id) =>
  delay(500).then(() => {
    const todo = mockDB.todos.find(t => t.id === id);
    todo.completed = !todo.completed;
    return todo;
  });
