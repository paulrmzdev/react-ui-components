import './App.css'
import SocialMediaButton from "./components/SocialMediaButton"
import Countdown from "./components/Countdown"
import ProgressBar from "./components/ProgressBar/ProgressBar"

function App() {
  return (
    <>
      <h1> React UI Components Library</h1>
      <article>
          <h3>Social Media Buttons</h3>
            <div className="socialMediaButtons" style={{display:"flex",justifyContent:"center"}}>
              <SocialMediaButton name="Github" target="https://github.com/" icon="https://img.icons8.com/ios-filled/50/ffffff/github.png"/>
              <SocialMediaButton name="LinkedIn" target="https://www.linkedin.com/" icon="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"/>
              <SocialMediaButton name="Spotify" target="https://open.spotify.com/" icon="https://img.icons8.com/ios-filled/50/ffffff/spotify.png"/>
              <SocialMediaButton name="Email" target="mailto:hola@email.com" icon="https://img.icons8.com/ios-filled/50/ffffff/circled-envelope.png"/>
            </div>
      </article>
      <article>
        <h3>Countdown</h3>
        <p style={{marginTop: 15}}>{"I will release this (hopefully, if I'm not busy) in"}</p>
        <Countdown deadline={new Date('2024-06-01T00:01:00')} />
        <div style={{backgroundColor:"#dddddd",borderRadius:5}}>
          <Countdown darkmode={false} deadline={new Date('2024-06-01T00:01:00')} />
          </div>
      </article>
      <article>
        <h3>ProgressBar</h3>
        <ProgressBar goal={100} progress={10} color="rgb(20, 158, 202)" label={true}/>
        <ProgressBar goal={100} progress={20} color="rgb(158, 20, 202)" label={true}/>
        <ProgressBar goal={100} progress={30} color="rgb(20, 202, 58)" label={true}/>
        <ProgressBar goal={100} progress={40} color="rgb(250, 58, 100)" label={true}/>
      </article>
      <a href="http://paulrmz.dev" target="_blank" rel="noopener noreferrer"><img src="https://paulrmz.com/assets/img/Firma-min.png" alt="Logo" title='firma' width={100}/></a>
      <div className=""><span>© 2024 </span><a href="http://paulrmz.dev" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", fontWeight:"bold",color:"var(--blue-react)"}}>PaulRmz</a>, All Right Reserved. </div>    
    </>
  )
}

export default App
