import React from "react";
import { Link } from "react-router-dom";

function Deal(props) {
  const { index, id, title, subReddit, thumbnail } = props;
  // const { index, id, title, url, onClick, thumbnail } = props;

  const link = `/${subReddit}/${id}`;

  return (
    <div className="mt-4 deal" id={"deal-" + id}>
      <table className="table">
        <tbody>
          <tr>
            <th scope="row">{index}</th>
            <td align="center">
              <img src={thumbnail} width="100px" alt="deal" />
            </td>
            <td>
              <Link to={link}>{title}</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Deal;
