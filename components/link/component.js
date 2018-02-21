import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';

const Link = ({ active, children, onClick, filter, setJSONTodos, deleteAll }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault()
        if(filter === "JSONPLACEHOLDER_TODOS") {
            axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                setJSONTodos(response.data);
            })
        } else if(filter === "DELETE_ALL") {
            deleteAll();
        } else {
            onClick();
        }
      }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link