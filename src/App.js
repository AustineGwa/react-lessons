import react from "react";
import { useState } from "react";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App() {

  const [name, setName] = useState("Austine")
  const  [textInput, setTextInput] = useState("")
  const  [tweets,setTweets] = useState([])

  return (
    <div>
       <h1>Hello  {name}</h1>
  
       <CreateTweet 
       textInput={textInput} 
       setTextInput={setTextInput}
       tweets={tweets} 
       setTweets={setTweets}/>
       <TweetList author={name} tweets={tweets}/>
    </div>
    
  );
}

export default App;
