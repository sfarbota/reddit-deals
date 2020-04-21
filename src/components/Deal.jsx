import React from "react";
import { Link } from "react-router-dom";

function Deal(props) {
  const { id, title, subReddit } = props;
  // const { index, id, title, url, onClick, thumbnail } = props;

  return (
    <div className="mt-4 deal" id={"deal-" + id}>
      <table className="table">
        <tbody>
          <tr>
            <td>
              <Link to={`/${subReddit}/${id}`}>{title}</Link>
<!--             
            <th scope='row'>{index}</th>
            <td align='center'>
                <img src={thumbnail} width='100px'/>
              
            </td>
            <td align='center'>
              <a
                className="align-middle"
                href={url}
                onClick={() => onClick(id)}
              >
                {title}
              </a> -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Deal;
