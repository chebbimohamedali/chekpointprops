import React from "react";

function ImageProfile({image}){
    return(
<div>
<img 
style={{
    borderRadius:"130px"
}}
src={image} alt="imageProfile" />
</div>

    )
}


export default ImageProfile;