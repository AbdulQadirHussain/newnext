import React from 'react'
import Link from 'next/link'
import {Header} from '@/components'
import {Footer} from '@/components'

// Folder Base Routing
const index = () => {
  return (
    <div>
      <Header />
      <h1>Blogs</h1>
      <Link href='/'>Go Back Nextjs import Link</Link>
      <br/>
      <a href='/'>Go Back anchor tag href</a>
      <Footer />
    </div>
  )
}

export default index
