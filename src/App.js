import react from "react";
import { useState } from "react";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";
import s from "./styles/App.module.css"

function App() {

  const [name, setName] = useState("Austine Gwa")
  const  [textInput, setTextInput] = useState("")
  const  [tweets,setTweets] = useState([])

  return (
    <div>
      <h1 className={s.title}>Twitter Light</h1>
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
