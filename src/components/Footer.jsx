import React from 'react'
import { facebook, iconMain, insta, linkedin, twitter } from '../assets/img'

const Footer = () => {
  return <>
  <div className='main-footer'>
    <div className="container">


<div className='row'>
  <div className="col-md-3 col-sm-12">
  <div className='d-flex gap-2'>
    <img src={iconMain} width={40} height={40} alt="" />
    <h5 className='mt-2'>Resume.AI</h5>
  </div>
  </div>


  <div className="col-md-3 col-4">
  <div className='line'>
    <p>home</p>
    <p>about</p>
  </div>
  </div>
  <div className="col-md-3 col-4">
  <div className='line'>
     <p>home</p>
     <p>home</p>
  </div>
  </div>
  <div className="col-md-3 col-4">
  <div className='line'>
        <p>about</p>
  </div>
  </div>


</div>
</div>
<hr  className='line-horizontal'/>
<div className='d-flex justify-content-between flex-wrap container-fluid'>


<p>Copyright @ 2023 masters’ union</p>
<div className='d-flex flex-wrap gap-3'>
<p>Privacy Policy</p>
<p>Terms and Conditions</p>
<p>Cookie Policy</p>
</div>
<div className='d-flex gap-2 '>
<img src={insta} width={30} height={30} alt="icon" />
<img src={facebook} width={30} height={30} alt="icon" />
<img src={twitter} width={30} height={30} alt="icon" />
<img src={linkedin} width={30} height={30} alt="icon" />
</div>

</div>

  </div>
  </>
}

export default Footer