export const ADD_TODO = 'ADD_TODO';
export const addTodo = text => dispatch => dispatch({
    type: ADD_TODO,
    text
});

export const FILTER_TODO = 'FILTER_TODO';
export const filterTodo = text => dispatch => dispatch({ type: FILTER_TODO, text })

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}

export const TOGGLE_TODO = 'TOGGLE_TODO'
export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export const DELETE_TODO = 'DELETE_TODO'
export const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        id
    }
}

export const UPDATE_TODO = 'UPDATE_TODO'
export const updateTodo = id => {
    return {
        type: UPDATE_TODO,
        id
    }
}

export const FINISH_UPDATE = 'FINISH_UPDATE'
export const finishUpdate = (text, id) => {
    return {
        type: FINISH_UPDATE,
        id,
        text
    }
}

export const SET_TODOS = 'SET_TODOS'
export const setJSONTodos = (todos) => {
    return {
        type: SET_TODOS,
        todos
    }
}

export const DELETE_ALL = 'DELETE_ALL'
export const deleteAll = () => {
    return { 
        type: DELETE_ALL
    }
}