import logo from './logo.svg';
import './App.css';
import Lampada from './components/Lampada'
import { useState } from 'react';

function App() {

  const [light, setLight] = useState(false)

  let fillColor = light ? 'tomato' : 'gray';

  const handleLight = () => setLight(!light);

  return (

    <div className="app">
        <h1>La lampada</h1>
        <section>
          <Lampada fillColor={fillColor}/>
        </section>
        <button onClick={handleLight}>ON / OFF</button>
    </div>
  );
}

export default App;
