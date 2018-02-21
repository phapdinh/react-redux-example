export const addTodo = text => dispatch => dispatch({
    type: 'ADD_TODO',
    text
});


export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const deleteTodo = id => {
    return {
        type: 'DELETE_TODO',
        id
    }
}

export const updateTodo = id => {
    return {
        type: 'UPDATE_TODO',
        id
    }
}

export const finishUpdate = (text, id) => {
    return {
        type: 'FINISH_UPDATE',
        id,
        text
    }
}

export const setJSONTodos = (todos) => {
    return {
        type: 'SET_TODOS',
        todos
    }
}

export const deleteAll = () => {
    return { 
        type: 'DELETE_ALL'
    }
}