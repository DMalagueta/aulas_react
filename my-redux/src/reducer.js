export default function reducer(state, action){

    // vai ser utilizado pela store para atualizar o state da store, consoante a action que a store recebeu

    if(action.type === 'ADD_MESSAGE'){
        return {
            messages: [...state.messages, action.message]
        }
    }

    if(action.type === 'DELETE_MESSAGE'){
        return {
            message: state.messages.filter((msg, i) => i !==  action.index)
        }
    }
    
    return state;
}

