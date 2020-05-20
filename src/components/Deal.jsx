import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

function Deal({ index, id, title, subReddit, thumbnail }) {
  const link = `/${subReddit}/${id}`;

  const filterTitle = title => {
    if (title.length > 86) return title.slice(0, 85) + '...';
    return title;
  };

  return (
    <li class="list-group-item d-flex">
      <h6 className="d-flex align-items-center mr-3">{index}</h6>
      <Link to={link}>
        <Image src={thumbnail} className="githubIcon" />
      </Link>
      {/* <div className="col-auto mb-3">
        <img src={thumbnail} width="100px" alt="deal" />
      </div> */}
      <Link className="m-3 my-auto" to={link}>
        <span className="text-success">{filterTitle(title)}</span>
      </Link>
    </li>
  );
}

export default Deal;
