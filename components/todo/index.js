import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, onDelete, onModify, onDone, completed, text, update }) => {
    let input;
    return (<li
        onClick={onClick}
        style={ {
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        { update 
            ? <input 
                  ref={node => { input = node} }
                  defaultValue={text}
                  onClick={(event) => { event.stopPropagation() }}/>
            : text }
        &nbsp;
        <button onClick={onDelete} >Delete</button>
        { update 
            ? <button onClick={(event) => { onDone(event, input.value) }}>Done</button>
            : <button onClick={onModify}>Modify</button>}
    </li>)
}
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo