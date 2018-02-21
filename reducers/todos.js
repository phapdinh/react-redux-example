const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
        return [
            ...state,
            {
                id: state.length,
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
                .map(todo => {
                    return todo.id > action.id ? { ...todo, id: --todo.id} : todo;
                })
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
        return [
            ...state,
            ...action.todos.map(({ id, title, completed }) => {
                    return {
                        id: id + state.length - 1,
                        text: title,
                        completed,
                        update: false
                    }
                }
            )
        ]
    case 'DELETE_ALL':
        return []
    default:
        return state
  }
}

export default todos