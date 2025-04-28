import React from "react";
import { Article } from "./Article";

export class Content extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            color: "lightcoral",
            fontWeight: "bold",
            backgroundColor: "lightgrey",
          }}
        >
          <p>This is the main content</p>
          <Article />
        </div>
      </div>
    );
  }
}
