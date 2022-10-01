import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia.js";

function createItem(item) {
  return (
    <Entry
      key={item.id}
      name={item.name}
      meaning={item.meaning}
      emoji={item.emoji}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createItem)}</dl>
    </div>
  );
}

export default App;
