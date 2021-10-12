import React from "react"
import { useState } from "react";

const CreateTweet = () => {
 //states
 const  [textInput, setTextInput] = useState("")
 const  [tweets,setTweets] = useState([])

    //Functions
    const userInputHandler = (e) =>{
       e.preventDefault();
       setTextInput(e.target.value)
    }

    const submitTweetHandler = (e) => {
       e.preventDefault()
       setTweets([...tweets,textInput])
    }

   

 return(
     <form onSubmit={submitTweetHandler}>
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