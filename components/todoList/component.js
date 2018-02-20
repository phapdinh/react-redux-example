import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../todo';

const TodoList = ({ todos, onTodoClick, onTodoDelete, onModify, finishUpdate }) => (
  <ul>
    {todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
        onDelete={(event) => onTodoDelete(event, todo.id)}
        onModify={(event) => onModify(event, todo.id) }
        onDone={finishUpdate(todo.id)}/>
    ))}
  </ul>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoDelete: PropTypes.func,
    onModify: PropTypes.func,
    finishUpdate: PropTypes.func,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList