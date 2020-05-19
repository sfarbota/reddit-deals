import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context";
import Loading from "../components/Loading";
import { getRedditDeals } from "../utils/dataApi";
import Deal from "../components/Deal";
import DefImg from "../images/baseline_add_shopping_cart_black.png";
import "../App.css";

function DealList() {
  const { subreddit } = useParams();
  const [state, setState] = useContext(Context);
  const [loading, setLoading] = useState(false);
  const { deals } = state;

  console.log(subreddit);

  useEffect(() => {
    setLoading(true);
    getRedditDeals(subreddit)
      .then(res => res.data.children)
      .then(res => {
        const posts = [];
        res.map(item => {
          posts.push(item.data);
          return posts;
        });
        setState({ deals: posts });
        setLoading(false);
      });
  }, [subreddit, setState]);

  const filteredDeals = () => {
    const result = deals.filter(deal => deal.link_flair_text === "[Deal/Sale]");
    return result;
  };

  if (loading) return <Loading />;
  else {
    return (
      <div className="mt-5">
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
              index={1 + index}
              key={deal.id}
              id={deal.id}
              title={deal.title}
              subReddit={subreddit}
              thumbnail={img}
            />
          );
        })}
      </div>
    );
  }
}

export default DealList;
