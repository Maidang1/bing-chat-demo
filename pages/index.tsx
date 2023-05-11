import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import { Aside } from '@/components/aside'

const inter = Inter({ subsets: ['latin'] })

// {"author":"bot","id":"369d3aff-0b57-40b8-9aa3-41350599c577","conversationId":"51D|BingProd|B0E0BE26A46C72A00A88EDDFF8714162F2BB22BA38E44A89F798AAB372AE99EC","clientId":"1055518764239809","conversationSignature":"dFoXcGBbJ2iSd1hTb2PtSMKvgd+8wAbA7Q/yTtjsE0Y=","invocationId":"2","text":"Hello! How can I help you today? 😊","detail":{"text":"Hello! How can I help you today? 😊","author":"bot","createdAt":"2023-05-11T05:17:32.8607067+00:00","timestamp":"2023-05-11T05:17:32.8607067+00:00","messageId":"6d206912-8db1-496e-b2fd-24d481bac16f","requestId":"0a88aaee-e065-4c85-9443-5b023236ac9e","offense":"None","adaptiveCards":[{"type":"AdaptiveCard","version":"1.0","body":[{"type":"TextBlock","text":"Hello! How can I help you today? 😊\n","wrap":true}]}],"sourceAttributions":[],"feedback":{"tag":null,"updatedOn":null,"type":"None"},"contentOrigin":"DeepLeo","privacy":null,"suggestedResponses":[{"text":"What can you do?","author":"user","createdAt":"2023-05-11T05:17:34.251565+00:00","timestamp":"2023-05-11T05:17:34.251565+00:00","messageId":"159b998b-54d6-485e-b944-839b5d68e6ef","messageType":"Suggestion","offense":"Unknown","feedback":{"tag":null,"updatedOn":null,"type":"None"},"contentOrigin":"DeepLeo","privacy":null},{"text":"What is your purpose?","author":"user","createdAt":"2023-05-11T05:17:34.2515673+00:00","timestamp":"2023-05-11T05:17:34.2515673+00:00","messageId":"e5f7896f-b7a8-4676-beaa-7d516022bd82","messageType":"Suggestion","offense":"Unknown","feedback":{"tag":null,"updatedOn":null,"type":"None"},"contentOrigin":"DeepLeo","privacy":null},{"text":"What are your capabilities?","author":"user","createdAt":"2023-05-11T05:17:34.2515677+00:00","timestamp":"2023-05-11T05:17:34.2515677+00:00","messageId":"e62e3c53-e319-49db-bf1f-505842943912","messageType":"Suggestion","offense":"Unknown","feedback":{"tag":null,"updatedOn":null,"type":"None"},"contentOrigin":"DeepLeo","privacy":null}]},"conversationExpiryTime":"2023-05-11T11:17:34.3172429Z"}



export default function Home() {
  // const [response, setResponse] = useState({})
  // useEffect(() => {
  //   fetch('/api/bing-chat').then(async res => {
  //     const resp = await res.json()
  //     setResponse(resp || {})
  //   })
  // }, [])
  return (
    <div className='h-screen w-screen flex bg-white'>
      <Aside />
    </div>
  )
}
