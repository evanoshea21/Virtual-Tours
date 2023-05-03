import classes from '@/styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import { useRouter } from 'next/router'


export default function Home() {
  const router = useRouter();
  const [demoLoaded, setDemoLoaded] = React.useState(false);

  return (
    <div className={classes.main} >

    {/* PUT MATTERPORT HERE -- FULL WIDTH */}

    <div className={classes.matterportDemo} >
        <iframe className={classes.iframe}
        allowFullScreen={false}
        onLoad={() => setDemoLoaded(true)}
        src="https://matterport.com/discover/space/Yam2fBFh6tZ"
        allow="xr-spatial-tracking">
        </iframe>
    </div>

    {/* PAGE BODY */}
    <h2 className={classes.title} >Sell your Property EASIER with 360° Virtual Tours</h2>
    <h2 className={classes.titleBig} >Sell your Property EASIER<br/>with 360° Virtual Tours</h2>
    {/* <h2 className={classes.title} >Engage more,<br/>Sell Quicker<br/>with 3D Virtual Tours</h2>
    <h2 className={classes.titleBig} >Engage more, Sell Quicker<br/>with 3D Virtual Tours</h2> */}
    <p className={classes.introPara} ><span>Listings grab more attention when they introduce new perspectives.</span> Viewing the entire interior with a Virtual Tour, or seeing the perimeter and layout of the property from above can be <span>enough to make you fall in love</span> with the home and reach out to an agent.<br/><br/> <span className={classes.redText} >Virtual Tours and Aerial photos</span> can help you <span className={classes.redText} >achieve these perspectives.</span></p>
    <h3 className={classes.header}>Our Services</h3>

    <h3 className={classes.zillowTitle}>Zillow 3D Home</h3>
    <div className={classes.zillowBox}>
      <div className={classes.zillowInfo}>
        <p>For listings with Zillow 3D Virtual Tours...</p>
        <ul>
          <li><span>43% more Views</span></li>
          <li><span>55% more Saves</span></li>
          <li><span>Homes sell 30% Faster</span></li>
        </ul>
      </div>
      <div className={classes.zillowImg}>
        <img src='https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/2/2020/07/Copy-of-graphic_hardtoignore2x-31de9d.png' width='100%' height='100%'></img>
      </div>
    </div>


    <h3 className={classes.mpTitle}>Matterport Tours</h3>
    <div className={classes.mpBox}>
      <div className={classes.mpImg}>
        <img src='https://api.coarchitects.com/wp-content/uploads/2022/06/HSIB_Matterport_Cover.jpg' width='100%' height='100%'></img>
      </div>
      <div className={classes.mpInfo}>
        <p className={classes.mpPara} > Matterport has the famous Dollhouse effect with multi-story navigation. <br/><br/>This Flagship Virtual Tour Software can host your tour on any website by posting to the MLS or embedding it on your site.</p>
      </div>
    </div>

    <h3 className={`${classes.mpTitle} ${classes.aerialTitle}`}>Aerial Photography</h3>
    <div className={classes.mpBox}>

      <div className={classes.mpInfo}>
        <p className={`${classes.mpPara} ${classes.aerPara}`}>Aerial photos can help you capture the size and layout of the entire property.<br/><br/>Wow clients with this new perspective from the sky.</p>
        <div className={classes.licensed}>
          <img src='https://previews.123rf.com/images/arcady31/arcady311404/arcady31140400022/27448890-licensed-stamp.jpg'></img>
          Part 107 Licensed Drone Pilot
        </div>
      </div>

      <div className={classes.aerialImg}>
        <img src='https://pilotinstitute.com/wp-content/uploads/2020/10/Set-the-scene.jpg' width='100%' height='100%'></img>
      </div>
    </div>

    <div className={classes.contactBox}>
      <h3 className={classes.contactTitle}>Let's get in Touch</h3>
      <h4 className={classes.subTitle} >FAQ on Contact Page!</h4>
      <button onClick={() => router.push('/contact')}  className={classes.btn} >Contact</button>
    </div>

    </div>
  )
}
