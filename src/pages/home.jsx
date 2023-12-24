import React from 'react'
import { AIresumeMaker, ChooseSectionResume, Footer, MyNavbar, SubFooter, Swiper } from '../components'

const Home = () => {
  return <>
  <MyNavbar/>
  <div>
  <AIresumeMaker/>
  <ChooseSectionResume/>
  </div>
  <Swiper/>
  <SubFooter/>
  <Footer/>
  </>
}

export default Home