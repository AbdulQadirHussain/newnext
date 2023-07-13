import { useRouter } from "next/router";
import Link from "next/link";

// Dynamic Rounting
const Carpage = () => {
    const router = useRouter();
    const { carspno } = router.query;
    return (
    <>
      <h1> {carspno} </h1>
      <Link href='/'>Go Back Nextjs import Link</Link>
      <br/>

    </>
  )
}

export default Carpage;