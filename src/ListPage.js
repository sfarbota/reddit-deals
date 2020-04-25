import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import { getRedditDeals } from "./utils/dataApi";
import ImageButton from "./components/ImageButton";
import Deal from "./components/Deal";
import DefImg from "./images/baseline_add_shopping_cart_black.png";
import "./App.css";

function DealList() {
  const [url, setUrl] = useState("");
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(false);

  // const handleClick = dealId => {
  //   let deal = deals.find(deal => deal.id === dealId);
  //   alert("Navigating to: " + deal.title);
  // };

  useEffect(() => {
    setLoading(true && url !== "");
    if (url !== "") {
      getRedditDeals(url)
        //fetch(url)
        // .then(res => res.json())
        .then(res => res.data.children)
        .then(res => {
          const posts = [];
          res.map(item => {
            posts.push(item.data);
            return posts;
          });
          setDeals(posts);
          setLoading(false);
        });
    }
  }, [url]);

  const filteredDeals = () => {
    const result = deals.filter(deal => deal.link_flair_text === "[Deal/Sale]");
    return result;
  };

  return (
    <div className="App">
      <h1 className="m-3">{url ? url + " Deals" : "Reddit Deals"}</h1>
      <div className={url ? "d-none" : null}>
        <ImageButton
          changeUrl={x => {
            setUrl(x);
          }}
        />
      </div>
      {loading ? <Loading /> : null}
      {deals.map((deal, index) => {
        let img;

        if (
          !deal.thumbnail ||
          deal.thumbnail === "self" ||
          deal.thumbnail === "default"
        ) {
          img = DefImg;
        } else img = deal.thumbnail;

        return (
          <Deal
            index={index + 1}
            key={deal.id}
            id={deal.id}
            title={deal.title}
            subReddit={deal.subreddit_name_prefixed}
            thumbnail={img}
            // url={"https://www.reddit.com/" + deal.permalink}
            // onClick={handleClick}
          />
        );
      })}
    </div>
  );
}

export default DealList;
