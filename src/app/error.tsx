"use client"
import React, { useEffect } from 'react'

export default function Error({error, reset} : {error : Error, reset : () => void}) {
    useEffect(() => {
        console.error(error);
    }, [error])
    
  return (
    <div>
        <p>Something when wrong!</p>
        <button onClick={() => reset()}>Rest error boundary</button>
    </div>
  )
}
