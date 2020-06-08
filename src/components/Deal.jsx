import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

function Deal({ index, id, title, subReddit, thumbnail }) {
  const link = `/${subReddit}/${id}`;

  const filterTitle = (title) => {
    return title.length > 86 ? title.slice(0, 85) + "..." : title;
  };

  return (
    <li class="list-group-item d-flex">
      <h6 className="d-flex align-items-center mr-3">{index}</h6>
      <div className="deal-icon-container">
        <Link to={link}>
          <Image src={thumbnail} className="deal-icon" />
        </Link>
      </div>
      {/* <div className="col-auto mb-3">
        <img src={thumbnail} width="100px" alt="deal" />
      </div> */}
      <Link className="m-3 my-auto" to={link}>
        <span
          className="text-success"
          dangerouslySetInnerHTML={{ __html: filterTitle(title) }}
        ></span>
      </Link>
    </li>
  );
}

export default Deal;
