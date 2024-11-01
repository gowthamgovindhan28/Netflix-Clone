import React, { useEffect, useState } from 'react'

import './Player.css'

import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {


  const{id}=useParams();
  const navigate =useNavigate();

  const [apiData,setApiData]=useState({
    name:'',
    key:'',
    published_at:'',
    type:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzg5MGRlYWM3MGQyN2YzMDM3Y2E3ZGM3MmUwODM5ZiIsIm5iZiI6MTcyOTE1MDE0OS4zNzE2MjEsInN1YiI6IjY3MTBiN2I4MWI5MTJhZGQyZWRiYzkzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MHE-7M4KNOs6ZshHE8-bkxHK7JmaWxXTt6E1jgIrqOY'
    }
  };
  
  useEffect(()=>{
     
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));

  },[])




  return (
    <div className='player'>
      <img src={back_arrow_icon} alt=""  onClick={()=>{
        navigate(-1)

      }}/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com//embed//${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
