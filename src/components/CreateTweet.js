import React from "react"
import { useState } from "react";

const CreateTweet = ({tweets,setTweets, textInput,setTextInput}) => {



    //Functions
    const userInputHandler = (e) =>{
       setTextInput(e.target.value)
    }

    const submitTweetHandler = (e) => {
       e.preventDefault()
       setTweets([...tweets,textInput])
       setTextInput('')
    }

   

 return(
     <form onSubmit={submitTweetHandler}>
        <textarea value={textInput} onChange={userInputHandler}
         cols="30" 
         rows="5"></textarea>
        <button>submit</button>
    
     </form>
  
 )
}

export default CreateTweet