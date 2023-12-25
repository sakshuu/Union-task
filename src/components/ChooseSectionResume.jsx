import React from 'react'
import "./../assets/css/ChooseSectionResume.css"
import { Arrowleft, ChooseAI, box, eye, interface_icon, magicpen, maineye, note, note_2, task_square, women} from '../assets/img'

const ChooseSectionResume = () => {
  const data =  [
    {
      tital:"Real-time preview",
      desc:"Preview the resumes real-time while adding the details.",
      pic:maineye,
    },
    {
      tital:"Real-time preview",
      desc:"Preview the resumes real-time while adding the details.",
      pic:note_2,
    },
    {
      tital:"Real-time preview",
      desc:"Preview the resumes real-time while adding the details.",
      pic:box,
    },
    {
      tital:"Real-time preview",
      desc:"Preview the resumes real-time while adding the details.",
      pic:magicpen,
    },
    ]

    const subData = [
      {
        tital:"Step by step guidance",
        icon:task_square
      },
      {
        tital:"Select from curated templates",
        icon: note
      },
      {
        tital:"Realtime resume preview",
        icon:eye
      },
    ]
  return (<>
<div className="container">

    <h3>Why choose AI resume maker? </h3>
    <div className="row row-content ">
      <div className="col-6">
        <img src={ChooseAI} className='' width={500} alt="" />
      </div>
      <div className="col-4 offset-2">
        <div class="card p-4 card-main">
        {
          data.map(item => (
            <div className='d-flex gap-4 '>
  
          <img src={item.pic} className='choose-resume' alt="" />
          <div>
          <span>{item.tital}</span>
          <p>{item.desc}</p>
          </div>
          </div>
          ))
        }
        </div>
      
      </div>
    </div>

    <div class="card card-centers">
      <div class="card-header p-0">
        <div className="row">
          <div className="col-6">
            <div className='card-sub-content'>
            <h3>Intelligent Guidance</h3>
            <p>Our AI-powered platform provides step-by-step guidance as you build your resume. From selecting the right template to tailoring content, our AI ensures your resume reflects your unique strengths.</p>
            <button type="button" class="btn btn-light">Try Now</button>
            </div>
          </div>
          <div className="col-6">
            <img src={women} width={545} height={313} alt="" />
          </div>
        </div>
      </div>
      <div class="card-body d-flex gap-4 justify-content-center">
        {
          subData.map(item => (
            <div className='d-flex gap-2 align-items-center'>
            <img src={item.icon} className='icons' alt="" />
                    <p className='mt-2'>{item.tital}</p>
                    </div>
          ))
        }
       
      </div>
    </div>



    <div className="row mb-4">
      <div className="col-6">
        <img src={interface_icon} className='' width={500} alt="" />
      </div>
      <div className="col-5 offset-1">
<h3>User-Friendly Interface</h3>
<p>No more struggling with complex formatting tools. Our intuitive interface makes it easy to enter your information, choose from a variety of templates, and customize your resume effortlessly.</p>
<img src={Arrowleft} alt="" />
      </div>
    </div>
        </div>
    </>
  )
}

export default ChooseSectionResume