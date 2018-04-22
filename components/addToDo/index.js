import React from 'react';
import { connect } from 'react-redux';
import { addTodo, filterTodo } from '../../actions';
import PropTypes from 'prop-types';

let AddTodo = ({ addTodo, filterTodo }) => {
  let input

  return (
      <form>
        <input
          ref={node => {
            input = node
          }}
        />
        <button onClick={e =>{
            e.preventDefault()
            if (!input.value.trim()) {
                return
            }
            addTodo(input.value);
            input.value = ''
        }}>
          Add Todo
        </button>
        <button onClick={e => {
            e.preventDefault()
            if (!input.value.trim()) {
                return
            }
            filterTodo(input.value)
            input.value = ''
        }}>
          Filter
        </button>
      </form>
  )
}

AddTodo.propTypes = {
    addTodo: PropTypes.func,
    filterTodo: PropTypes.func
}

AddTodo = connect(null, { addTodo, filterTodo })(AddTodo)

export default AddTodo