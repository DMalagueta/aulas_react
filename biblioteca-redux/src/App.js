import './App.css';
import BookDashboard from './components/BookDashboard';
import { Provider }  from 'react-redux'
import { store }     from './store'
import {useState} from 'react'
import Teste from './components/Teste';

function App() {
  const [show, setShow] =  useState(false);

  return (
    <div className="app">
        <h1>Lista de Livros</h1>
        {
          show && <Teste />
        }
        <button onClick={()=>setShow(!show)}>show/hide</button>
        <Provider store={store}>

            <BookDashboard />
            
        </Provider>
    </div>  
  );
}

export default App;
