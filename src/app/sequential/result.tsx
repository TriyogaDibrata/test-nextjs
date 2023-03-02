//implementasi fetch api dengan swr

import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'

interface Props {
    query : string
}

const fetcher = (url:string) => fetch(url).then(res => res.json())

export default function Result({query} : Props) {
    const {data, error} = useSWR(`https://api.github.com/search/users?q=${query}`, fetcher)
    var loading = !data && !error
  return (
    <div style={{marginTop: '12px'}}>
        <p>Hasil Pencarian Pengguna : {query}</p>
        {loading && "Mencari Data..."}
        {data && data.items.map((user:any, index:number) => {
            return <ul key={index}>
                <li><Link href={`/sequential/${user.login}`}>{user.login}</Link></li>
                <li>Repository : <Link href={user.repos_url}>{user.repos_url}</Link></li>
            </ul>
        })}
    </div>
  )
}
