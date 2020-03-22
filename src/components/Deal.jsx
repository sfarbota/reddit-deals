import React from "react";

function Deal(props) {
  const { id, title, url, onClick } = props;

  return (
    <div className="mt-4 deal" id={"deal-" + id}>
      <table class="table">
        <tbody>
          <tr>
            <td>
              <a
                className="align-middle"
                href={url}
                onClick={() => onClick(id)}
              >
                {title}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Deal;
