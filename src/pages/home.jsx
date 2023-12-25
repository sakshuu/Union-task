import React from 'react'
import { AIresumeMaker, ChooseSectionResume, Footer, MyNavbar, Myswipers, SubFooter,  } from '../components'

const Home = () => {
  return <>
  <MyNavbar/>
  <AIresumeMaker/>
  <div className='container-main'>
  <ChooseSectionResume/>
  <Myswipers/>
  <SubFooter/>
  <Footer/>
  </div>
  </>
}

export default Home