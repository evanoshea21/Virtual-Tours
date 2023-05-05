import classes from '@/styles/Contact.module.css'
import Link from 'next/link'
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';



export default function Contact() {
  const router = useRouter();

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

    <div className={classes.faq}>
      <h1 className={classes.title} >FAQ</h1>

      <div style={{fontSize: '1.4rem'}} className={classes.question}>
        <p >How does it work?</p>
      </div>
        <p><span style={{fontWeight: '900'}}>Step 1:</span> You book a Time Slot</p>
        <p><span style={{fontWeight: '900'}}>Step 2:</span> We shoot and edit your 360° Virtual Tour for the time scheduled</p>
        <p><span style={{fontWeight: '900'}}>Step 3:</span> We send you the link to the Matterport Virtual Tour for you to post to the MLS
        </p>
        <p style={{color: '#333', marginTop: '-20px'}}>(for Zillow 3D Home, we will post to zillow.com for you)</p>

      <div style={{fontSize: '1.4rem'}} className={classes.question}>
        <p >Turnaround Time?</p>
      </div>
        <p>We fulfill orders within 24 hours, guarenteed.</p>

      <div style={{fontSize: '1.4rem'}} className={classes.question}>
        <p >Pricing?</p>
      </div>
        <p style={{textDecoration: 'underline'}}>Pricing per service is indicated during the booking process.</p>
        <p>Our prices start at $159 for a Zillow 3D Home. </p>
        <p>If 4 homes are booked in a 1-week period, special discounts are made, with the Zillow 3D home being offered for only $129! </p>
        {/* <p>Prices depend on service and property size.</p> */}

      <div style={{fontSize: '1.4rem'}} className={classes.question}>
        <p >Refunds? Cancellations?</p>
      </div>
        <p>There's <span style={{fontWeight: '900'}}>zero risk</span> with our services. If you are unsatisfied with our services, we will provide a 100% refund, guarenteed. If you are not happy, we don't want your money!</p>

        <p>If you cancel 24 hours prior to the scheduled time slot, you'll receieve a <span style={{fontWeight: '900'}}>100% refund </span>minus processing fees. For cancellations within 24 hours, you'll receive 90% of your order payment.</p>


      <div style={{fontSize: '1.4rem'}} className={classes.question}>
        <p >What do I do?</p>
      </div>
        <p>On your end...</p>
        <p>Provide Directions to access the property if you're not planning on being on-site—this info is filled out during booking.</p>
        <p>If you've booked a Matterport tour, you just have to post the tour link to the MLS once we email it your way.</p>
        <p>That's it!</p>

        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Button sx={{fontSize: '1.2rem'}} onClick={() => router.push('/book')}  variant="contained">Book</Button>
        </div>

        <div style={{margin: '50px 20px', fontSize: '1.4rem'}} className={classes.question}>
        <p >If you have any more questions, please consider reaching out! <br/><br/>We thank you for your Business.</p>
      </div>


    </div>

    </>
  )
}
