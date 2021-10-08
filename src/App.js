import react from "react";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App() {

  const name = "Austine Gwa"
  const message = "This  is my react \nprops test"
  return (
    <div>
       <h1>Hello react App</h1>
       <CreateTweet/>
       <TweetList author={name} message={message}/>
    </div>
    
  );
}

export default App;
