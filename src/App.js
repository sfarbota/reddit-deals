import React, { Component } from "react";
import "./App.css";
import Deal from "./components/Deal";

class App extends Component {
  state = {
    data: {},
    deals: []
  };

  handleClick = dealId => {
    var deals = [...this.state.deals];
    var deal = deals.find(deal => deal.id === dealId);
    alert("Navigating to: " + deal.title);
    this.setState({ deals });
  };

  componentDidMount() {
    fetch("https://www.reddit.com/r/frugalmalefashion/new.json")
      .then(response => response.json())
      .then(jsonResponse =>
        this.setState({
          data: jsonResponse,
          deals: jsonResponse.data.children.map(post => ({
            id: post.data.id,
            title: post.data.title,
            url: "https://www.reddit.com/" + post.data.permalink
          }))
        })
      );
  }

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
