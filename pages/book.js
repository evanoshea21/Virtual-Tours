import classes from '@/styles/Contact.module.css'
import Link from 'next/link'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React from 'react'
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';



export default function Book() {
  const [size, setSize] = React.useState('');
  const [service, setService] = React.useState('');
  const [disabled, setDisabled] = React.useState(true);
  const [callUs, setCallUs] = React.useState(false);
  const [calendlyURL, setCalendlyURL] = React.useState('https://calendly.com/your360guy');
  const baseUrl = 'https://calendly.com/your360guy';

  const router = useRouter();


  React.useEffect(() => {
    if(size.length && service.length) {
      setCallUs(false);
//TEST
      if(size === 'small' && service === 'zillow') {
        setCalendlyURL(baseUrl + '/test');
      }
////////////

      // if(size === 'small' && service === 'zillow') {
      //   console.log('small zillow');
      //   setCalendlyURL(baseUrl + '/zillow');
      // }
      else if(size === 'small' && service === 'matterport') {
        console.log('small MP');
        setCalendlyURL(baseUrl + '/matterport');

      }
      else if(size === 'small' && service === 'both') {
        console.log('small BOTH');
        setCalendlyURL(baseUrl + '/pro-package');

      }
      //for large homes
      else if(size === 'large' && service === 'zillow') {
        console.log('large zillow');
        setCalendlyURL(baseUrl + '/zillow-large');
      }
      else if(size === 'large' && service === 'matterport') {
        console.log('large MP');
        setCalendlyURL(baseUrl + '/matterport-large');
      }
      else if(size === 'large' && service === 'both') {
        console.log('large BOTH');
        setCalendlyURL(baseUrl + '/pro-package-large-home');

      }
      //custom homes
      else {
        console.log('custom homes');
        setCallUs(true);
      }

      setDisabled(false);

    }
  },[size, service]);

  const changeService = (event) => {
    setService(event.target.value);
  };
  const changeSize = (event) => {
    setSize(event.target.value);
  };

  return (
    <>
    <>
    <h1 className={classes.title} >Book a Time</h1>
    <div className={classes.para}>
      <p >Let us know if you have any questions before booking.</p>
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
            <MenuItem value={'both'}>Package (Matterport + Zillow)</MenuItem>
          </Select>
        </FormControl>
        <div className={classes.question}>What is the Size of the Property?</div>
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
        {callUs ? (
          <div style={{margin: 0}} className={classes.callus}>
            <h2>Call Us</h2>
            <a href='tel:9168051852'>(916) 805-1852</a>
          </div>
        ) : (
        <div className={classes.bookbtn}>
        <Button disabled={disabled} sx={{py: '10px', width: '95%', fontSize: '1rem'}} onClick={() => router.push(calendlyURL)}  variant="contained">Book a Time</Button>
        </div>
        )}
      </div>
    </div>

    <div className={classes.afterForm}>
      <p className={classes.refundPara} >We offer a 100% refund if you are not entirely satisfied with your service.</p>
      <div className={classes.moneybackImg}>
        <img src='https://i0.wp.com/problogger.com/wp-content/uploads/2011/02/wp-content_uploads_34_gold_guarantee.jpg?fit=300%2C300&ssl=1' width='100%' height='100%'></img>
      </div>
    </div>

    </>
    </>
  )
}
