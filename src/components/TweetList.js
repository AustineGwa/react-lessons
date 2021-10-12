import React from "react"
import Tweet from "./Tweet"
import { useState } from "react"

const TweetList = ({name,tweets}) => {

 return(
     <div className="tweet-list">
         {tweets.map(tweet =>
             <Tweet name={name}
             message={tweet} />)}
     </div>
  
 )
}

export default TweetList