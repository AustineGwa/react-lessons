import React from "react"
import Tweet from "./Tweet"
import { useState } from "react"

const TweetList = ({author,message}) => {
const [name, setName] = useState("")

 return(
     <div className="tweet-list">
         <Tweet name = {author} message={message}/>
         <Tweet name = {author} message={message}/>
         <Tweet name = {author} message={message}/>
         <button onClick = {() => setName("Gwa")} />
     </div>
  
 )
}

export default TweetList