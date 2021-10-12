import React from "react"
import { useState } from "react";

const CreateTweet = () => {
 //states
 const  [textInput, setTextInput] = useState("")

    //Functions
    const userInputHandler = (e) =>{
       setTextInput(e.target.value)
    }

   

 return(
     <form>
        <textarea 
        value = {textInput}
        onChange={userInputHandler}
         cols="30" 
         rows="5"></textarea>
        <button>submit</button>
    
     </form>
  
 )
}

export default CreateTweet