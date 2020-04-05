import React, { useEffect, useState } from "react";
import { getDeal } from "./utils/dataApi";
import Loading from "./components/Loading";

function DealPage(props) {
  const [deal, setDeal] = useState({});
  const { id, subreddit } = props.match.params;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getDeal(subreddit, id).then(res => {
      setDeal(res[0].data.children[0].data);
      setLoading(false);
    });
  }, [subreddit, id]);

  return (
    <div>
      <div className="text-center mt-3">{loading ? <Loading /> : null}</div>
      <h1>{deal.selftext}</h1>
    </div>
  );
}

export default DealPage;
