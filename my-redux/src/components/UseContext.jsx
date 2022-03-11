import React, { useContext } from 'react'

const appContext = React.createContext();

export default function UseContext() {
  return (
    <appContext.Provider value={ {name:'joao' } }>
        <Hello />
    </appContext.Provider>
  )
}

function Hello() {

    return(
        <div>
            <h2>Dentro do hello</h2>
            <Greeting  />
        </div>
    )

}

function Greeting() {
    const context = useContext(appContext)

    return(
     <p>O meu nome é: {context.name} </p>
    )
}