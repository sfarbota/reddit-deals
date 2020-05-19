import React, { useState } from "react";
import ImageButton from "../components/ImageButton";
import "../App.css";

function Home() {
  const [url, setUrl] = useState("");

  return (
    <div className="App">
      <h1>Reddit Deals</h1>
      <ImageButton
        changeUrl={x => {
          setUrl(x);
        }}
      />
    </div>
  );
}

export default Home;
