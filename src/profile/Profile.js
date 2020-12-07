import React from 'react';
import PropTypes from 'prop-types';



const Profile =(props)=> {
   
    return (
       
    
<div >
{props.handleNameFn(props.fullName)}
  
   <div style={{backgroundColor:'Grey',width:'250px',margin:'auto'}}>

      {props.children}
    
    <h2 style={{fontFamily:'monospace'}}>Name :  {props.fullName} </h2>
    <h2 style={{fontFamily:'monospace'}}> Bio :{props.bio}</h2>
    <h2 style={{fontFamily:'monospace'}}>Profession : {props.profession}</h2>

   {/* <button onClick={()=>props.handleNameFn(props.fullName)}>show name</button>  */}

 
   </div>
</div>
    );
    
   
}

Profile.defaultProps={
fullName:'test' ,
bio:'test',
profession:'test'

}

Profile.propTypes={
fullName:PropTypes.string.isRequired,
bio : PropTypes.string,
profession : PropTypes.string,
handleNameFn : PropTypes.func

};

export default Profile;