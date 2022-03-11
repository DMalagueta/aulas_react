export function reducer(state, action) {    

    // definir action que vai ler o modelo de dados dos livros  
    if(action.type === 'READ_BOOKS'){ 
        return {
            books: [...action.payload],
        }
    }
    if(action.type === 'DELETE_BOOK'){
        return {
            books: state.books.filter(b => b.id !== action.id)
        }
    }

    return state;
}