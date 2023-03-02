"use client"
import React, { useState } from 'react'

export default function FirstLastName() {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [combine, setCombine] = useState('');
  return (
    <div>
        <form>
            <input placeholder='Nama Depan' onChange={(e) => setFirst(e.target.value)}/>
            <input placeholder='Nama Belakang' onChange={(e) => setLast(e.target.value)}/>
            <button type='button' onClick={() => setCombine(first +' '+ last)}>Gabung</button>
            <p>{ combine }</p>
        </form>
    </div>
  )
}
