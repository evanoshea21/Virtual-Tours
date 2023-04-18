import classes from '@/styles/Contact.module.css'
import Link from 'next/link'


export default function Contact() {
  return (
    <>
    <h1 className={classes.title} >Contact</h1>
    <div className={classes.para}>
      <p >We look forward to answering any questions or helping you pick a service!</p>
    </div>
    <div className={classes.phone}>
      <a href='tel:9168051852'>(916) 805-1852</a>
    </div>
    <div className={classes.email}>
    <a href='mailto: eoshea.business@gmail.com'>eoshea.business@gmail.com</a>
    </div>

    </>
  )
}
