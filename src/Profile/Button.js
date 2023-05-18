function Button({handleName, name}){
    return(
    <div>
        <button onClick={()=>handleName(`Je suis ${name}`)}> A propos </button>
    </div>
    )
}

Button.defaultProps={
    name:"Mohamed Ali"
}
export default Button;