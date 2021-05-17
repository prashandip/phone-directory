import React, { Component } from "react";
import Header from "./Header";
import "./App.css";

export default class App extends Component {
  render() {
    let subscribers = [
      { id: 1, name: "Shilpa Bhat", phone: "9999999999" },
      { id: 2, name: "Shristi", phone: "8888888888" },
    ];
    return (
      <div>
        <Header />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {subscribers.map((sub) => {
            return (
              <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
