import React from 'react'
import Link from 'next/link'
import {Header,Footer} from '@/components'

// Nested Routing
const blog1 = () => {
  return (
    <div>
      <Header />
      <h2>blog 1</h2>
      <Link href='/blogs'>Go Back Nextjs import Link</Link>
      <Footer />
      <br/>
    </div>
  )
}

export default blog1
