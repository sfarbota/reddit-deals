import React from 'react';
import { Link } from 'react-router-dom';

function Deal({ index, id, title, subReddit, thumbnail }) {
  const link = `/${subReddit}/${id}`;

  return (
    <div className="container">
      <div className="row">
        <div className="col-auto">{index}</div>
        <div className="col-auto">
          <img src={thumbnail} width="100px" alt="deal" />
        </div>
        <div className="col-auto">
          <Link to={link}>{title}</Link>
        </div>
      </div>
    </div>
  );
}

export default Deal;
