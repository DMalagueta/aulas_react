import './App.css';
import PropDrilling from './components/PropDrilling';
import UseContext from './components/UseContext';
import Chat from './redux-components/Chat';

function App() {
  return (
    <div className="App">
          <h1>Redux</h1>
          <hr />
          {/* <PropDrilling />
          <hr />
          <UseContext /> */}
          <Chat />
    </div>
  );
}

export default App;
