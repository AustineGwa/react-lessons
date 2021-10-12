import react from "react";
import { useState } from "react";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App() {


  const [name, setName] = useState("Austine")
  const message = "This  is my react props test"

  const greet = (e) => {
    setName("Gwa")
  };
  return (
    <div>
       <h1>Hello  {name}</h1>
       <button onClick={greet}> Click </button>


       <CreateTweet/>
       <TweetList author={name} message={message}/>
    </div>
    
  );
}

export default App;
