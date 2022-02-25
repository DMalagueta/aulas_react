import React, { useEffect, useState } from 'react'

export default function UsingLocalStorage() {

    const [user, setUser] = useState('Joao')

    useEffect(() => {
        const storedUser = localStorage.getItem('user');

        if(storedUser) {
            setUser(storedUser);
        }

    }, []) // executar inicio 
    
    useEffect(() => {
        localStorage.setItem('user', user);
    }, [user])

  return (
    <select value={user} onChange={(e)=>setUser(e.target.value)}>
        <option>Joao</option>    
        <option>Maria</option> 
        <option>Miguel</option> 
        <option>Sofia</option> 
    </select>
  )
}
