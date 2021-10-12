import React from "react"
import Tweet from "./Tweet"
import { useState } from "react"

const TweetList = ({author,tweets}) => {
const [name, setName] = useState("")

 return(
     <div className="tweet-list">
         <Tweet name = {author} tweets={tweets[0]}/>    
         <Tweet name = {author} tweets={tweets[1]}/>
     </div>
  
 )
}

export default TweetList