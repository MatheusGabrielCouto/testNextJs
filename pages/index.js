import React, {useState} from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <header className='homeHeader'>
      <h1>Titulo</h1>

      <ul>
        <li><a href="/Contato">Contato</a></li>
        <li><a href=".">Home</a></li>
      </ul>
    </header>
    
    </>
  )
}