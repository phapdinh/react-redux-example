const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
        return [
            ...state,
            {
                id: action.id,
                text: action.text,
                completed: false,
                update: false
            }
        ]
    case 'TOGGLE_TODO':
        return state.map(todo =>
            (todo.id === action.id) 
            ? {...todo, completed: !todo.completed}
            : todo
        )
    case 'DELETE_TODO':
        return state.filter(todo => !(todo.id === action.id))
    case 'UPDATE_TODO':
        return state.map(todo =>
            (todo.id === action.id)
            ? { ...todo, update: !todo.update }
            : todo
        )
    case 'FINISH_UPDATE':
        return state.map(todo => 
            (todo.id === action.id)
            ? { ...todo, text: action.text, update: false }
            : todo
        )
    case 'SET_TODOS':
        return action.todos.map(({ id, title, completed }) => {
            return {
                id,
                text: title,
                completed,
                update: false
            }
        })  
    default:
        return state
  }
}

export default todos