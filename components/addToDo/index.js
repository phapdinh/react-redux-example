import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'

let AddTodo = ({ addTodo }) => {
  let input

  return (
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          addTodo(input.value);
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
  )
}

AddTodo = connect(null, { addTodo })(AddTodo)

export default AddTodo