import React from "react"
import Tweet from "./Tweet"

const TweetList = ({author,message}) => {

 return(
     <div className="tweet-list">
         <Tweet name = {author} message={message}/>
         <Tweet name = {author} message={message}/>
         <Tweet name = {author} message={message}/>
     </div>
  
 )
}

export default TweetList