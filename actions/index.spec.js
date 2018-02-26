import { setVisibilityFilter, deleteAll } from './index';

test('create setVisibilityFilter action', () => {
    let expectedAction = {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_ALL'
    }
    expect(setVisibilityFilter('SHOW_ALL')).toEqual(expectedAction);
});

test('create deleteAll action', () => {
    let expectedAction = {
        type: 'DELETE_ALL'
    }
    expect(deleteAll()).toEqual(expectedAction);
});