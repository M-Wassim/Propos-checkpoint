
import './App.css';
import Profile from './profile/Profile'
import photo from './profile/profilephoto.png'

function App() {
  return (
    <div className="App">
      
      <Profile ><img src={photo} alt='imagefortest' width="200px" style={{borderRadius:'200px'}}></img> </Profile>
      <Profile ><img src={photo} alt='imagefortest' width="200px" style={{borderRadius:'200px'}}></img> </Profile>
    </div>
  );
}

export default App;
