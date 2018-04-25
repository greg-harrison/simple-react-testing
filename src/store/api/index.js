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
    console.log('fetching');
    if (Math.random() > 0.5) {
      throw new Error('Boom!');
    }

    return mockDB.todos;
  });
