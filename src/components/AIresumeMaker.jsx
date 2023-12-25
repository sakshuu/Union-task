import React from 'react'
import { Frame, Rectangle } from '../assets/img'
import "./../assets/css/AIresumeMaker.css"

const AIresumeMaker = () => {
  return <>

  <div className='main'>
  <img src={Rectangle} className='rectangle-img' alt="" />
  <div className='main-content'>
<h1>
Welcome to <span className='color-text'>AI Resume</span> 
<br /> 
<span className='color-text'>Maker !</span>  Your path to
<br /> 
professional success !</h1>
{/* <div> */}
{/* <div className='content-pen'> <img src={pen} alt="pen" className='bg-pen' /> Real-time preview</div> */}
{/* <div className='content-pen'> <img src={pen} alt="pen" className='bg-pen' /> Templates Library</div> */}
{/* </div> */}
<div className='btn-home mt-4'>
<button type="button" class="btn btn-background">Start building</button>

</div>
  </div>
  <div className='main-sub'>
    <img src={Frame} className='sub-img' alt="" />
  </div>
  
  </div>
  </>
}

export default AIresumeMaker