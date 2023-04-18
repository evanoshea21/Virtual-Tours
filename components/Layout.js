import classes from '@/styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'


export default function Layout(props) {
  const router = useRouter();

  function goHome() {
    if(router.pathname !== '/') {
      console.log('going home......');
      router.push('/');
    } else {
      console.log('already home');
    }
  }

  return (
    <div className={classes.main} >
    <Head>
        <title>Virtual 3D Tour Guy</title>
        <meta name="description" content="Create Virtual Tours" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>

    {/* NAVBAR */}
    <div className={classes.smallNavBox}>
      <div className={classes.smnavbar}>
        <h1 onClick={goHome} >Your 360 Guy</h1>
        <div className={classes.links}>
          <Link className={classes.link}  href='/pricing'>Pricing</Link>
          <Link className={classes.link}  href='/contact'>Contact</Link>
        </div>
      </div>
    </div>
    <div className={classes.navBox}>
      <div className={classes.navbar}>
        <Link className={classes.link}  href='/pricing'>Pricing</Link>
        <h1 onClick={goHome} >Your 360 Guy</h1>
        <Link className={classes.link}  href='/contact'>Contact</Link>
      </div>
    </div>

    {props.children}

    </div>
  )
}
