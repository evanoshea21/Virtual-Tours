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
    <h2 className={classes.titleSm} >Professional<br/>Virtual Tours & Aerial Photos at Affordable prices</h2>
    <h2 className={classes.title} >Professional Virtual Tours<br/>and Aerial Photos at<br/>Affordable prices</h2>

    <p className={classes.introPara} >Statistics have shown, time and again, that customers are converted at a higher rate on listings that present a 360 Virtual Tour.</p>
    <p className={classes.introPara}>A home is easier to fall in love with when new and engaging perspectives are available for customers to peruse the property at their own pace.</p>

    <h3 className={`${classes.header} ${classes.whyUs}`}>Why choose us?</h3>

    <div className={classes.threeCol}>
      <div className={classes.col1}>
        <div className={classes.iconBox}></div>
        <h2>Affordable</h2>
        <p>We are able to keep our pricing low by..</p>
        <ul>
          <li>
          <p>Streamlining the booking/scheduling process</p>
          </li>
          <li>
            <p>Offering deals for our loyal, high-volume clients</p>
          </li>
        </ul>
        <div className={classes.colBtn}>Learn More</div>
      </div>
      <div className={classes.col2}>
      <div className={classes.iconBox}></div>
        <h2>Professional</h2>
        <ul>
          <li>
            <p>24-hour turnaround time, guarenteed</p>
          </li>
          <li>
            <p>Professional photographing equipment</p>
          </li>
          <li>
            <p>Industry leading Virtual Tour Software—Matterport</p>
          </li>
        </ul>
        <div className={classes.colBtn}>Learn More</div>
      </div>
      <div className={classes.col3}>
      <div className={classes.iconBox}></div>
        <h2>Effective</h2>
        <p>Listings that show informative perspectives are convert buyers</p>
        <ul>
          <li>
            <p>Google reports that Virtual Tours doubled the interest in property listings</p>
          </li>
          <li>
            <p>For 18-34yo, virtual tours increased the likelihood of a sale by 130%</p>
          </li>
        </ul>
        <div className={classes.colBtn}>Learn More</div>
      </div>
    </div>






    <h3 className={classes.header}>Our Services</h3>

    <h3 className={classes.zillowTitle}>Zillow 3D Home</h3>
    <div className={classes.zillowBox}>
      <div className={classes.zillowInfo}>
        <p>Zillow reports that listings with their<br/>3d Home Tour receive:</p>
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
