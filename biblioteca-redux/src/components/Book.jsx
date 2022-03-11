import { useDispatch } from "react-redux";

export default function Book({book}) {

  const {id, title, author, alreadyRead, imageUrl, imgUrlGr} = book;

  const dispatch = useDispatch();

  const handleDelete = () => {
      dispatch({
        type: 'DELETE_BOOK',
        id
      })
  }

  return (
    <article>
        <h1>{title}</h1>
        <h2>{author}</h2>
        <img src={'livros/'+ imageUrl} />
        <p>Already read: {alreadyRead ? 'yes' : 'not'}</p>
        <button onClick={handleDelete}>Delete</button>
    </article>
  )
}
