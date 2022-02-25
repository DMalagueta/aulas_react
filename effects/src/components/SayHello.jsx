import { useEffect, useState } from "react";

export default function SayHello() {

    const greetings =['Bom dia', 'Bonjour', 'Aloha', 'Good Morning'];

    const [index, setIndex] = useState(0);


    const updateTitle = () => {
        setIndex(Math.floor(Math.random() * greetings.length));
    }

    // executado sempre que haja um novo render da componente
    useEffect(() => {
        console.log('dentro do effect', index);
        document.title = greetings[index];
    })
    

  return (
      <section>
        <div>SayHello</div>
        <button onClick={updateTitle}>Dizer ola</button>
      </section>
  )
}


