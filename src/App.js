import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "❤️": "Red Heart",
  "🔥": " Fire",
  "😀": "Grinning Face",
  "🙂": " Slightly Smiling Face",
  "🙃": "Upside-Down Face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setmeaning] = useState("");

  function InputEmoji(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (userInput === undefined) {
      meaning = "we do not have this emoji in our databse";
    }
    setmeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <div style={{ color: "blue", fontSize: "30px", padding: "10px" }}>
        welcome to emoji interpreter
      </div>
      <input
        style={{
          backgroundColor: "darkgrey",
          width: "80%",
          padding: "40px",
          overflow: "hidden",
          textAlign: "center"
        }}
        onChange={InputEmoji}
        placeholder="enter emoji"
      />
      <h2>{meaning}</h2>
      <h3
        style={{
          color: "red",
          fontSize: "25px",
          padding: "15px",
          textAlign: "center",
          margin: "5px"
        }}
      >
        emoji's shown below are in our database
      </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "25px", padding: "0.5rem", cursor: "arrow" }}
            key={emoji}
          >
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
