let nextTodoId = 0;
export const addTodo = text => dispatch => dispatch({
    type: 'ADD_TODO',
    id: nextTodoId++,
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