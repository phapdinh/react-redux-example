import { connect } from 'react-redux';
import { toggleTodo, deleteTodo, updateTodo, finishUpdate } from '../../actions';
import TodoList from './component';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id));
        },
        onTodoDelete: (event, id) => {
            event.stopPropagation();
            dispatch(deleteTodo(id));  
        },
        onModify: (event, id) => {
            event.stopPropagation();
            dispatch(updateTodo(id));
        },
        finishUpdate: id => {
            return (event, text) => {
                event.stopPropagation();
                dispatch(finishUpdate(text, id));
            }
        }
    }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList