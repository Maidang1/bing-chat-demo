import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  const [response, setResponse] = useState({})
  useEffect(() => {
    fetch('/api/bing-chat').then(async res => {
      const resp = await res.json()
      setResponse(resp || {})
    })
  })
  return (
    <div>{JSON.stringify(response)}</div>
  )
}
