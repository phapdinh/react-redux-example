import { connect } from 'react-redux';
import { setVisibilityFilter, setJSONTodos, deleteAll } from '../../actions';
import Link from './component';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter));
        },
        setJSONTodos: (todos) => {
            dispatch(setJSONTodos(todos));
        },
        deleteAll: () => {
            dispatch(deleteAll());
        }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink