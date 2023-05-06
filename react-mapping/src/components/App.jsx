import React from "react";
import Emoji from "./Emoji";
import emojipedia from "../emojipedia";

function createEmoji(emoji){
  return(
    <Emoji 
    key={emoji.id}
    symbol={emoji.emoji}
    name={emoji.name}
    meaning={emoji.meaning}/>
  )
}

function App() {
  return (
    <div>
    <h1>
    <span>emojipedia</span>
    </h1>
    <dl className="dictionary">
       
       {emojipedia.map(createEmoji)}
       </dl>
    </div>
    
  );
}

export default App;
