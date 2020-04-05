import React from "react";
import { Link } from "react-router-dom";

function Deal(props) {
  const { id, title, subReddit } = props;

  return (
    <div className="mt-4 deal" id={"deal-" + id}>
      <table className="table">
        <tbody>
          <tr>
            <td>
              <Link to={`/${subReddit}/${id}`}>{title}</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Deal;
