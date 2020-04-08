import React from "react";

function Deal(props) {
  const { index, id, title, url, onClick, thumbnail } = props;

  return (
    <div className="mt-4 deal" id={"deal-" + id}>
      <table class="table">
        <tbody>
          <tr>
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
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Deal;
