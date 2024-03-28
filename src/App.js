import './App.css';
import twitchLogo from './image/twitch.svg'
import xLogo from './image/X.svg'
import facebookLogo from './image/facebook.svg';
import githubLogo from './image/github.svg'
import pokeLogo from './image/Pokeball.svg'
import linkedin from './image/Linkedin.svg'

function App() {
  return (
    <div className="App">
      <div className="head">
  <h1>NeverEvi</h1>
    <div className="links">
      <div className="pageLink">
        <a href="https://neverevi.github.io/final-project-frontend/#/" target="_blank" rel="noopener noreferrer">
          <img src={pokeLogo} className="logo" alt="Pokecard logo" />
        </a>
        <p>PokeCard</p>
      </div>
      <div className="pageLink">
        <a href="https://github.com/NeverEvi" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} className="logo" alt="Github logo" />
        </a>
        <p>GitHub</p>
      </div>
      <div className="pageLink">
        <a href="https://www.facebook.com/NeverEvi" target="_blank" rel="noopener noreferrer">
          <img src={facebookLogo} className="logo" alt="Facebook logo" />
        </a>
        <p>Facebook</p>
      </div>
      <div className="pageLink">
        <a href="https://twitter.com/NeverEvi" target="_blank" rel="noopener noreferrer">
          <img src={xLogo} className="logo" alt="X logo" />
        </a>
        <p>Twitter/X</p>
      </div>
        <div className="pageLink">
        <a href="https://www.twitch.tv/neverevi" target="_blank" rel="noopener noreferrer">
          <img src={twitchLogo} className="logo" alt="Twitch logo" />
        </a>
        <p>Twitch.tv</p>
      </div>
      <div className="pageLink">
        <a href="https://www.linkedin.com/in/kane-cramer-neverevi" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} className="logo" alt="LinkedIn logo" />
        </a>
        <p>LinkedIn</p>
      </div>
    </div>
  
  </div>
        
      
    </div>
  );
}

export default App;
