import React, { useEffect, useState } from 'react'

export default function WindowResizer() {


    const [size, setSize] = useState(getSize());

    function getSize() {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        }
    }

    useEffect(() =>{

        function handleResize(){
            setSize(getSize());
        }

        window.addEventListener('resize',handleResize,false);

        return () => window.removeEventListener('resize',handleResize,false);
        // metodo de "cleanup " para nao deixar processos correr no browser, isto é execudado antes de executar o effect e quando a componente se retira da aplicação

    }, []) // array de dependencias, passando a array vazia, so é execudada no primeiro render da minha componente, igual ao componentDidMount() das classes


  return (
    <div className="windowResize">Width: {size.width} | Height:{size.height} </div>
  )
}
