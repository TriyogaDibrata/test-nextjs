//ini contoh client component / client side rendering (CSR)

"use client"
import React, { useState } from 'react'
import Result from './result'

export default function Page() {
  
  const [query, setQuery] = useState('')
  
  const onSearch = (e : any) => {
    e.preventDefault()
    var inputQuery = e.target[0].value
    setQuery(inputQuery)
  }
  return (
    <div>
      <h1>Ini Contoh Parallel Fetching</h1>
        <form onSubmit={onSearch}>
            <input placeholder='Cari Pengguna Github'/>
            <button>Cari</button>
        </form>
        <p>{`Mencari data : ${query}`}</p>
        {query && <Result query={query}/>}
    </div>
  )
}
