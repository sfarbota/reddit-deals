import React, { Component } from "react";

class Deal extends Component {
  render() {
    const { id, title, url, onClick } = this.props;
    return (
      <div className="deal" id={"deal-" + id}>
        <a href={url} onClick={() => onClick(id)}>
          {title}
        </a>
      </div>
    );
  }
}

export default Deal;
