import react from "react";
import { useState } from "react";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App() {

  const [name, setName] = useState("Austine Gwa")
  const  [textInput, setTextInput] = useState("")
  const  [tweets,setTweets] = useState([])

  return (
    <div>
    <CreateTweet 
       textInput={textInput} 
       setTextInput={setTextInput}
       tweets={tweets} 
       setTweets={setTweets}/>
       <TweetList name={name} tweets={tweets}/>
    </div>
    
  );
}

export default App;
