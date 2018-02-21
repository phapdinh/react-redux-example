import React from 'react';
import FilterLink from '../link';

const Footer = () => (
    <p>
        Show:
        {' '}
        <FilterLink filter="SHOW_ALL">
            All
        </FilterLink>
        {', '}
        <FilterLink filter="SHOW_ACTIVE">
            Active
        </FilterLink>
        {', '}
        <FilterLink filter="SHOW_COMPLETED">
            Completed
        </FilterLink>
        {', '}
        <FilterLink filter="JSONPLACEHOLDER_TODOS">
            Json Place Holder Todos Suggestions
        </FilterLink>
        {', '}
        <FilterLink filter="DELETE_ALL">
            Delete All
        </FilterLink>
    </p>
)

export default Footer;