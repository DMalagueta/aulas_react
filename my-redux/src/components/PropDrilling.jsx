import React from 'react'

export default function PropDrilling() {
    let nome = 'Joao';


  return (
    <div>
        <h1>Na component propDrilling</h1>
        <Hello name={nome}/>
    </div>
  )
}

function Hello(props) {

    return(
        <div>
            <h2>Dentro do hello</h2>
            <Greeting name={props.name} />
        </div>
    )

}

function Greeting(props) {
    return(
     <p>O meu nome é: {props.name}</p>
    )
}