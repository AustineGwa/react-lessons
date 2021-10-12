import React from "react"

const Tweet = ({name,message}) => {

const greet = ({name}) => {alert(" 1 like")}

 return(
     <div>
        <h2>Name {name}</h2>
        <h3>{message}</h3>
        <button>Delete</button>
        <button> Like</button>
     </div>
  
 )
}

export default Tweet