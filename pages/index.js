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
        src="https://matterport.com/discover/space/ibE9yBsaRnS"
        allow="xr-spatial-tracking">
        </iframe>
    </div>
    {/* <div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 75%;"><iframe src="https://my.matterport.com/show/?m=Srdq49wjRh4" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowFullScreen allow="xr-spatial-tracking;"></iframe></div> */}

    {/* PAGE BODY */}
    <h2 className={classes.title} >Engage more,<br/>Sell Quicker<br/>with 3D Virtual Tours</h2>
    <h2 className={classes.titleBig} >Engage more, Sell Quicker<br/>with 3D Virtual Tours</h2>

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


    <h3 className={classes.mpTitle}>Matterport</h3>
    <div className={classes.mpBox}>
      <div className={classes.mpImg}>
        <img src='https://api.coarchitects.com/wp-content/uploads/2022/06/HSIB_Matterport_Cover.jpg' width='100%' height='100%'></img>
      </div>
      <div className={classes.mpInfo}>
        <p className={classes.mpPara} > Matterport has the famous Dollhouse effect and multi-story navigation. <br/><br/>This Flagship Virtual Tour Software can be used embededded on ANY website, such as Realtor.com and Redfin</p>
        {/* <ul>
          <li><span>Buyers are 300% more engaged with 3D Tours than photos alone.</span></li>
          <li><span>55% more Saves</span></li>
          <li><span>Homes sell 30% Faster</span></li>
        </ul> */}
      </div>
    </div>

    <div className={classes.contactBox}>
      <h3 className={classes.contactTitle}>Let's get in Touch</h3>
      <button onClick={() => router.push('/contact')}  className={classes.btn} >Contact</button>
    </div>

    </div>
  )
}
