import React, { useEffect, useState } from "react";
import { getDeal } from "../utils/dataApi";
import Moment from "react-moment";
import Loading from "../components/Loading";
import ReactMarkdown from "react-markdown";

function DealPage(props) {
  const [deal, setDeal] = useState({});
  const { id, subreddit } = props.match.params;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getDeal(subreddit, id).then((res) => {
      setDeal(res[0].data.children[0].data);
      setLoading(false);
    });
  }, [subreddit, id]);

  if (loading)
    return (
      <div className="mt-5 d-flex justify-content-center">
        <Loading />
      </div>
    );

  return (
    <div style={{ maxWidth: 800 }} className="container-sm mt-4 mx-auto">
      <div className="card">
        <div className="card-header font-weight-bold">{deal.title}</div>
        {deal.thumbnail &&
        (deal.thumbnail.startsWith("http://") ||
          deal.thumbnail.startsWith("https://")) ? (
          <img
            src={deal.thumbnail}
            style={{ width: "30%" }}
            className="card-img-top m-2 mx-auto"
            alt="deal"
          />
        ) : null}
        <ul className="list-group list-group-flush">
          {deal.selftext ? (
            <li className="list-group-item">
              <ReactMarkdown source={deal.selftext} />
            </li>
          ) : null}
          <li className="list-group-item">
            <a href={deal.url} className="card-link">
              {deal.url}
            </a>
          </li>
          <li className="list-group-item">
            <span> Date Created: </span>
            <Moment unix fromNow withTitle titleFormat="LLLL">
              {deal.created_utc}
            </Moment>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DealPage;
