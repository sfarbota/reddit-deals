import React, { useEffect, useState } from "react";
import { getDeal } from "../utils/dataApi";
import Moment from "react-moment";
import Loading from "../components/Loading";
import ReactMarkdown from "react-markdown";
import { Button } from "react-bootstrap";

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
        <div className="card-header">
          <span className="card-title font-weight-bold">{deal.title}</span>
          <span className="card-date-time">
            &nbsp;&nbsp;&#8226;&nbsp;&nbsp;
            <Moment unix fromNow withTitle titleFormat="LLLL">
              {deal.created_utc}
            </Moment>
          </span>
        </div>
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
          <li className="list-group-item m-2 mx-auto">
            <Button
              onClick={() =>
                window.open(
                  deal.url.startsWith("/")
                    ? "https://www.reddit.com" + deal.url
                    : deal.url,
                  "_blank"
                )
              }
              className="card-link"
            >
              View Deal &#x1F855;
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DealPage;
