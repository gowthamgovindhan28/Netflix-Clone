import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import { login, signup } from '../../firebase';
import netflix_spinner from '../../assets/netflix_spinner.gif';
import introVideo from '../../assets/intro_video.mp4'; 
import './Login.css';

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showVideo, setShowVideo] = useState(false); 
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); 

  useEffect(() => {
    
    const videoPlayed = sessionStorage.getItem('videoPlayed');
    
    if (!videoPlayed) {
      setShowVideo(true); 
    }
  }, []);

  const handleVideoEnd = () => {
    
    sessionStorage.setItem('videoPlayed', 'true');
    setShowVideo(false);
  };

  const handlePlayVideo = () => {
    
    const videoElement = document.getElementById("introVideo");
    if (videoElement) {
      videoElement.play();
      setIsVideoPlaying(true);
    }
  };

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  };

  return (
    loading ? (
      <div className="login-spinner">
        <img src={netflix_spinner} alt="Loading..." />
      </div>
    ) : (
      <div className='login'>
        
        {showVideo ? (
          <div className="video-container">
            <video 
              id="introVideo"
              className="intro-video" 
              onEnded={handleVideoEnd} 
            >
              <source src={introVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {!isVideoPlaying && (
              <div className="play-button-overlay" title='Click To Enter' onClick={handlePlayVideo}>
                <button className="play-button"><img src={logo} alt="login" /></button>
                
              </div>
            )}
          </div>
        ) : (
          <>
            
            <img src={logo} className='login-logo' alt="" />
            <div className="login-form">
              <h1>{signState}</h1>
              <form>
                {signState === "Sign Up" && (
                  <input 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}  
                    type="text" 
                    placeholder='Your Name' 
                  />
                )}

                <input 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  type="email" 
                  placeholder='Email' 
                />

                <input 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  type="password" 
                  placeholder='Password' 
                />
                <button onClick={user_auth} type='submit'>{signState}</button>

                <div className="form-help">
                  <div className="remember">
                    <input type="checkbox" />
                    <label>Remember Me</label>
                  </div>
                  <p>Need Help?</p>
                </div>
              </form>

              <div className="form-switch">
                {signState === "Sign In" ? (
                  <p>
                    New to Netflix? <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
                  </p>
                ) : (
                  <p>
                    Already have an account? <span onClick={() => setSignState("Sign In")}>Sign In Now</span>
                  </p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    )
  );
};

export default Login;
