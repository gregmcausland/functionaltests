
export default function applicationReducer (state = {}, action) {
  return {
    ...state,
    todos: todos(state.todos, action)
  }
}

export function todos(state = [], action) {
  switch(action.type) {
    case 'ADD_TODO':
      return [ ...state, action.todo ];
  }
}