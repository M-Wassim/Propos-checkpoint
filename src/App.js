
import './App.css';
import Profile from './profile/Profile'
import photo from './profile/profilephoto.png'
import Welcome from './Welcome'


  


function App() {
  const handleName=(name)=> alert(`bonjour ${name}!!`);
  return (
    <div className="App">
      
      <Profile fullName='ali' bio='ali bio' profession='ali profession' handleNameFn={handleName}>
        <img src={photo} alt='imagefortest' width="200px" style={{borderRadius:'200px'}}></img> 
     
          </Profile>
      <Profile handleNameFn={handleName} ><img src={photo} alt='imagefortest' width="200px" style={{borderRadius:'200px'}}></img> </Profile>

      {/* <Welcome /> */}
    </div>
  );
}

export default App;
