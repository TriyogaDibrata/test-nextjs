import Link from 'next/link'
import React from 'react'
//styling menggunakan module.css
import styles from '@/styles/dashboard.module.css';

export default function layout({children} : {children : React.ReactNode}) {
  return (
    <div className={styles.custom}>
        {children}
    </div>
  )
}
