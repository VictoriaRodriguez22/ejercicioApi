import React, { useEffect, useState } from 'react'
import foto from '../ImagenesDescargadas/Dibujos/foto-arbol.jpg'

const UsoApi = () => {

    let imag1 = foto

    const [users, setUsers] = useState([])

    const getUsers = (url) =>{
        fetch(url)
        .then(response => response.json())
        .then(data => setUsers(data.data))
    }

    useEffect(() => {
        getUsers('https://pokeapi.co/api/v2/pokemon/ditto');
    }, [])

    const[count, setCount] = useState(null);

  return (
    <div>
      {users.map((user, index) => {
        return <p key={index} > {user.name}  </p>
      })}
      {
        count % 2 === 0 ? imag1 : <p> Imagen Oculta </p>
      }

      <button onClick={() => setCount(count + 1)}> Pulsar </button>
    </div>
  )
}

export default UsoApi
