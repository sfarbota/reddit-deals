import React, { Component } from "react";
import "./App.css";
import Deal from "./components/Deal";

class App extends Component {
  state = {
    deals: [
      {
        id: 1,
        title: "Deal 1",
        url: "#"
      },
      {
        id: 2,
        title: "Deal 2",
        url: "#"
      },
      {
        id: 3,
        title: "Deal 3",
        url: "#"
      }
    ]
  };

  handleClick = dealId => {
    var deals = [...this.state.deals];
    var deal = deals.find(deal => deal.id === dealId);
    alert(deal.title);

    this.setState({
      deals
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Reddit Deals</h1>
        {this.state.deals.map((deal, index) => {
          return (
            <Deal
              key={deal.id}
              id={deal.id}
              title={deal.title}
              url={deal.url}
              onClick={this.handleClick}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
