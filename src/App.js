
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  console.log('App')
  return (
    <div className='todo-app'>
     <TodoList />
    </div>
  );
}

export default App;
