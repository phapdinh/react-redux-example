import React from 'react';
import Footer from '../../components/footer';
import AddTodo from '../../components/addTodo';
import VisibleTodoList from '../../components/todoList';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App;