import React from "react";
import ImageProfile from "./ImageProfile";
import image from "./img.png";
import PropTypes from 'prop-types';

function Profile({fullName, profession, bio}){
//    console.log(fullName)
    return(

<div style={
    {
        textAlign:"center",
        color:"white"
}}>

<ImageProfile image={image} />
<h1>  {fullName} </h1>
<h2> {profession} </h2>
<p> {bio} </p>
</div>
    );

}
Profile.defaultProps={
    fullName:"Chebbi Mohamed Ali"
}
Profile.propTypes={
    fullName:PropTypes.string,
    profession:PropTypes.string,
    bio:PropTypes.string
}
export default Profile; 