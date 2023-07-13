import Link from "next/link";
import { useRouter } from "next/router"
import {Header,Footer} from '@/components'

// Dynamic Rounting
const dynamicblogNo = () => {
    const routerHook = useRouter();
    const dynamicRoute = routerHook.query.dynamicblogNo;
  return (
    <div>
        <Header />
        <h1>This is Dynamic {dynamicRoute}</h1>
        <Link href="/">Go Back to Homepage</Link>
        <Footer />
    </div>
  )
}

export default dynamicblogNo;
