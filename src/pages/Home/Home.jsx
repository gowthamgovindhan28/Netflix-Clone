import React from 'react'
import './Home.css'
import TitleCards from '../../components/TitleCards/TitleCards'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/Play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <div className='home'>

      <Navbar/>
      
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
        <img src={hero_title} alt=""  className='caption-img'/>
        <p>Orphaned brothers Sam and Nathan "Nate" Drake are caught trying to steal 
          a map made after the Magellan expedition from a Boston museum. Before the 
          orphanage can expel Sam, he sneaks out to be on his own, but promises Nate 
          that he will return, leaving him a ring belonging to their supposed ancestor 
          Sir Francis Drake.</p>
          <div className="hero-btns">
            <Link to={'/mplayer'}><button className='btn'><img src={play_icon} alt="" />Play</button></Link>
            <a href="https://www.netflix.com/in/title/80189829"><button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button></a>
          </div>
         <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"Top Rated on Netflix"} category={"top_rated"}/>
      <TitleCards title={"Blockbuster Movies"} category={"popular"}/>
      <TitleCards title={"upcoming"} category={"upcoming"}/>
      <TitleCards title={"trending in India"} category={"now_playing"}/>

      </div>
      <Footer/>
    </div>
  ) 
}

export default Home
