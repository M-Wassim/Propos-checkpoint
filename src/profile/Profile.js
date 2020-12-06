import React from 'react';
import PropTypes from 'prop-types';



const Profile =(props,{fullName='test',bio='test',profession='test',handleName})=> {
    handleName=()=>{
        alert(`bonjour ${fullName}!!`)
    }
   
    return (

    
<div >
   <div style={{backgroundColor:'Grey',width:'250px',margin:'auto'}}>

      {props.children}
    
    <h2 style={{fontFamily:'monospace'}}>Name :  {fullName} </h2>
    <h2 style={{fontFamily:'monospace'}}> Bio :{bio}</h2>
    <h2 style={{fontFamily:'monospace'}}>Profession : {profession}</h2>
   {/* <button onClick={handleName}>show name</button>  */}
   {handleName()}
 
   </div>
</div>
    );
    
   
}

Profile.propTypes={
fullName:PropTypes.string,
bio : PropTypes.string,
profession : PropTypes.string,
handleName : PropTypes.func

};

export default Profile;