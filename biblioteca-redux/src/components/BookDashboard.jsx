import { useEffect } from "react"
import { useDispatch} from 'react-redux'
import BookList from "./BookList";

export default function BookDashboard() {

  const dispatch = useDispatch();

  useEffect(() => {
      fetch('data.json')
        .then(response => response.json())
        .then(data => {
            dispatch({
              type: 'READ_BOOKS',
              payload: data.books
            })
        })
        .catch(() => console.log('ocorreu um erro....'))
  }, [])

  /* useEffect(() => {

    (async function (){
      try{
            const resp = await fetch('data.json');
            const data = resp.json();
            dispatch({ 
              type: 'READ_BOOKS', 
              payload: data
            })
      } catch(err){
        console.log('ocorreu um erro')
      }

    })()
  
  },[]) */

  return (
    <div>
        <BookList />
    </div>
  )
}
