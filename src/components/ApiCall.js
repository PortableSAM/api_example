/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import axios from "axios";

import "./ApiCell.css";

const API_URL = "https://jsonplaceholder.typicode.com";

class ApiCall extends React.Component {
  state = {
    users: []
  };

  getApi = async () => {
    const URL = `${API_URL}/users`;
    await axios
      .get(URL)
      .then(res => res.data)
      .then(data => {
        this.setState({
          users: data
        });
        console.log(this.state.users);
      });
  };

  componentDidMount() {
    this.getApi();
  }

  render() {
    return (
      <div>
        <div className="title_text">
          <h3>JSONPlaceholder User Data Example</h3>
        </div>
        <div className="container">
          {this.state.users.map(user => (
            <div className="data" key={user.id}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Linecons_user-avatar.svg/768px-Linecons_user-avatar.svg.png" />
              <ul>
                <li className="Item_1">
                  <b>Name: </b>
                  {user.name}
                </li>
                <li className="Item_2">
                  <b>Nick Name: </b>
                  {user.username}
                </li>
                <li className="Item_3">
                  <b>E-Mail: </b>
                  {user.email}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ApiCall;
