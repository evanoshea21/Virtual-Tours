import classes from '@/styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button';



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
          {/* <Link className={classes.link}  href='/pricing'>BOOK</Link> */}
          <Link className={classes.link}  href='/contact'>Contact</Link>
          <Button sx={{fontSize: '1rem'}} onClick={() => router.push('/book')}  variant="contained">Book</Button>
        </div>
      </div>
    </div>
    <div className={classes.navBox}>
      <div className={classes.navbar}>
        <Link className={classes.link}  href='/contact'>Contact</Link>
        <h1 onClick={goHome} >Your 360 Guy</h1>
        <Button sx={{fontSize: '1.2rem'}} onClick={() => router.push('/book')}  variant="contained">Book</Button>
      </div>
    </div>

    {props.children}

    </div>
  )
}
