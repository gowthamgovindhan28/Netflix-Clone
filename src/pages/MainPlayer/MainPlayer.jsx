import React, { useEffect, useState } from 'react'

import './MainPlayer.css'

import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const MainPlayer = () => {


 
  const navigate =useNavigate();


  return (
    <div className='player'>
      <img src={back_arrow_icon} alt=""  onClick={()=>{
        navigate(-1)

      }}/>
   <iframe width="90%" height="90%" src="https://www.youtube.com/embed/80dqOwAOhbo?si=Rf3X4zCKmgxllSN8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <div className="player-info">
        <p><b>Release Date:</b>2018-12-14</p>
        <p>The Protector </p>
        <p> Official Trailer [HD] </p>
      </div>
    </div>
  )
}

export default MainPlayer
