import React from "react";
import "./App.css";
import ApiCall from "./components/ApiCall";

class App extends React.Component {
  render() {
    return (
      <div className="body_container">
        <ApiCall />
      </div>
    );
  }
}

export default App;
