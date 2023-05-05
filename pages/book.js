import classes from '@/styles/Contact.module.css'
import Link from 'next/link'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React from 'react'
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



export default function Book() {
  const [disabled, setDisabled] = React.useState(true);
  const [service, setService] = React.useState('');
  const [checked, setChecked] = React.useState('off');
  const [calendlyURL, setCalendlyURL] = React.useState('https://calendly.com/your360guy');
  const baseUrl = 'https://calendly.com/your360guy';

  const router = useRouter();

  const changeService = (event) => {
    let val = event.target.value;
    setService(val)
    setDisabled(false);
    setCalendlyURL(baseUrl + '/' + val);
  };

  const acceptTerms = (event) => {
    let val = event.target.checked;
    console.log('terms: ', val);
    setChecked(val)
  };

  // const changeSize = (event) => {
  //   setSize(event.target.value);
  // };
  // const changePayment = (event) => {
  //   setPayment(event.target.value);
  // };

  return (
    <>
    <>
    <h1 className={classes.title} >Book a Time</h1>
    <div className={classes.para}>
      <p ><a className={classes.aTag}  href='/contact'>Let us know</a> if you have any questions before booking!</p>
    </div>


    <div className={classes.bookingForm} >
      <div className={classes.inputs}>
        <div className={classes.question}>What type of service are you looking for?</div>
      <FormControl className={classes.formMui}  sx={{width: '100%'}}>
          <InputLabel id="service2">Service</InputLabel>
          <Select
            labelId="service2"
            id="service1"
            value={service}
            label="Service"
            onChange={changeService}
          >
            <MenuItem value={'zillow'}>Zillow 3D Home</MenuItem>
            <MenuItem value={'matterport'}>Matterport Pro</MenuItem>
            <MenuItem value={'aerial'}>Aerial Photos (standalone)</MenuItem>
            <MenuItem value={'zillow-aerial'}>Zillow & Aerial Photos (package)</MenuItem>
            <MenuItem value={'mp-aerial'}>Matteport & Aerial Photos (package)</MenuItem>
          </Select>
        </FormControl>
        <div style={{maxWidth: '350px', fontWeight: '200', color: 'rgb(100,100,100)'}} className={classes.question}>Note: there is a $50 deposit due at time of booking. This will be subtracted from the price at the time of fulfillment.</div>




        {/* <FormControlLabel sx={{ml: '2px'}} control={
        <Checkbox
        checked={checked}
        onChange={acceptTerms}
        />} label="I understand that a $50 deposit will be made at the time of booking. This will be subtracted from the price of the service when order is fulfilled." /> */}
        {/* <div className={classes.question}>What is the Size of the Property?</div>
        <FormControl className={classes.formMui}  sx={{width: '100%'}}>
          <InputLabel id="demo-house-size">Property Size</InputLabel>
          <Select
            labelId="demo-house-size"
            id="demo-house-size2"
            value={size}
            label="Property Size"
            onChange={changeSize}
            >
            <MenuItem value={'small'}>0-2500 sqft</MenuItem>
            <MenuItem value={'large'}>2501-4000 sqft</MenuItem>
            <MenuItem value={'custom'}>4001+ (must call for quote)</MenuItem>
          </Select>
        </FormControl>
        <div className={classes.question}>How will you be paying today?</div>
        <FormControl className={classes.formMui}  sx={{width: '100%'}}>
          <InputLabel id="demo-payment-type">Payment</InputLabel>
          <Select
            labelId="demo-payment-type"
            id="demo-payment"
            value={payment}
            label="Payment"
            onChange={changePayment}
            >
            <MenuItem value={'stripe'}>Debit / Credit</MenuItem>
            <MenuItem value={'paypal'}>Paypal</MenuItem>
          </Select>
        </FormControl> */}

        {/* {callUs ? (
          <div style={{margin: 0}} className={classes.callus}>
            <h2>Call Us</h2>
            <a href='tel:9168051852'>(916) 805-1852</a>
          </div>
        ) : ( */}
        <div className={classes.bookbtn}>
        <Button disabled={disabled} sx={{py: '10px', width: '95%', fontSize: '1rem'}} onClick={() => router.push(calendlyURL)}  variant="contained">Book a Time</Button>
        </div>
        {/* )} */}
      </div>
    </div>

    <h2 className={classes.title} >Services and Pricing</h2>

    <div className={classes.pricing}>
      <table className={classes.table} >
        <tr>
          <th>Service</th>
          <th>Details</th>
          <th>Pricing</th>
        </tr>
        <tr>
          <td>Zillow 3D home</td>
          <td className={classes.desc}>A virtual tour for your Zillow listing. Boost engagement and recieve the "3D Home" badge on your listing to grab attention.</td>
          <td>159</td>
        </tr>
        <tr>
          <td>Matterport PRO</td>
          <td className={classes.desc}>Our flagship Virtual Tour service. This Virtual Tour includes the famous Dollhouse perspective, multi-story navigation, and descriptions you can add to highlight features in the home. <br/><br/><span style={{color: 'grey'}}>Did you know: Matterport Tours get uploaded to Zillow too!</span></td>
          <td>249</td>
        </tr>
        <tr>
          <td>Aerial Photos</td>
          <td className={classes.desc} >5 professionally shot and edited photos. We are certified drone pilots, with a license from the FAA.</td>
          <td>280</td>
        </tr>
        <tr>
          <td>Zillow + Aerial Photos</td>
          <td className={classes.desc}>Capture all perspectives with a Virtual Tour and Drone Pictures. Discounted Prices apply for this bundle.</td>
          <td>390 <br/><span style={{color: 'green'}}>$49 Savings</span></td>
        </tr>
        <tr>
          <td>Matterport + Aerial Photos</td>
          <td className={classes.desc}>Capture all perspectives with a Virtual Tour and Drone Pictures. Discounted Prices apply for this bundle.</td>
          <td>435 <br/><span style={{color: 'green'}}>$94 savings</span></td>
        </tr>
      </table>
    </div>

    <div className={classes.afterForm}>
      <p className={classes.refundPara} >We offer a 100% refund if you are not entirely satisfied with the service.</p>
      <div className={classes.moneybackImg}>
        <img src='https://i0.wp.com/problogger.com/wp-content/uploads/2011/02/wp-content_uploads_34_gold_guarantee.jpg?fit=300%2C300&ssl=1' width='100%' height='100%'></img>
      </div>
    </div>

    </>
    </>
  )
}
