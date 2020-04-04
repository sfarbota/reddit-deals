import React, { useState, useEffect } from "react";
import "./App.css";
import ImageButton from './components/ImageButton';
import Deal from "./components/Deal";

function App() {
  const [url, setUrl] = useState('');
  const [deals, setDeals] = useState([]);

  const handleClick = dealId => {
    let deal = deals.find(deal => deal.id === dealId);
    alert("Navigating to: " + deal.title);
  };

  useEffect(() => {
    if(url !== '')
    fetch(url)
      .then(res => res.json())
      .then(res => res.data.children)
      .then(res => {
        const posts = [];
        res.map(item => {
          posts.push(item.data);
          return posts;
        });
        setDeals(posts);
      });
  }, [url]);

  console.log(deals);
  // componentDidMount() {
  //   fetch("https://www.reddit.com/r/frugalmalefashion/new.json")
  //     .then(response => response.json())
  //     .then(jsonResponse =>
  //       this.setState({
  //         data: jsonResponse,
  //         deals: jsonResponse.data.children.map(post => ({
  //           id: post.data.id,
  //           title: post.data.title,
  //           url: "https://www.reddit.com/" + post.data.permalink
  //         }))
  //       })
  //     );
  // }

  return (
    <div className="App container">
      <h1>Reddit Deals</h1>
      <ImageButton changeUrl={(x) =>{setUrl(x)}} />          
      {deals.map(deal => {
        return (
          <Deal
            key={deal.id}
            id={deal.id}
            title={deal.title}
            url={"https://www.reddit.com/" + deal.permalink}
            onClick={handleClick}
          />
        );
      })}
    </div>
  );
}

export default App;
