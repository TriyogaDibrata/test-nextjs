//ini contoh server component / server side rendering component (SSR)

import React from 'react'

async function getData(name:string) {
  const res = await fetch(`https://api.github.com/users/${name}`)
  return res.json()
}

export default async function DetailCari({params} : {params : {slug:string}}) {
  const dataPengguna = await getData(params.slug)
  return (
    <div>
      <p>Detail User : {params.slug}</p>
      <div>
        {JSON.stringify(dataPengguna)}
      </div>
    </div>
  )
}
