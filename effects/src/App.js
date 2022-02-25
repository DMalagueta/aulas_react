import './App.css';
import SayHello from './components/SayHello';
import UsingLocalStorage from './components/UsingLocalStorage';
import WindowResizer from './components/WindowResizer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>userEffect()</h1>
          <SayHello />
          <hr/>
          <WindowResizer/>
          <hr />
          <UsingLocalStorage/>
      </header>
    </div>
  );
}

export default App;
