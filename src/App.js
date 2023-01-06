
import './App.css';
import Counter from './components/Counter';
import TodoComponent from './components/TodoComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <TodoComponent></TodoComponent>
      </header>
    </div>
  );
}

export default App;
